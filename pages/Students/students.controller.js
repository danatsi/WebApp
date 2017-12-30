/**
 * Created by Noy Yizchaki on 12/24/2017.
 */
angular.module('MyApp')
    .controller('StudentsController', function($scope, $http,$mdEditDialog) {

        $scope.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: true,
            pageSelect: true
        };
        var a = 1;
        $scope.avgGrade = function() {

            return "DANA"
            //Math.floor((Math.random() * 100) + 1);
            //
        }
        $scope.selected = [];
    // create a message to display in our view
    $scope.message = 'Look! I am an about page.';
    // create a message to display in our view
    $scope.message = 'Look! I am an about page.';
    $http({
        method: "GET",
        url: 'https://randomuser.me/api/?results=50',
        params: {
            dataType: "json"
        }
    }).then(function (response) {
        $scope.studentList = response.data.results;
        console.log(response);

    });
    $scope.query = {
        order: 'name',
        limit: 20,
        page: 1
    };
        $scope.logPagination = function (page, limit) {
            console.log('page: ', page);
            console.log('limit: ', limit);
        }

        $scope.limitOptions = [20, 40, 50, 10000];



        $scope.editComment = function (event, student) {
            // if auto selection is enabled you will want to stop the event
            // from propagating and selecting the row
            event.stopPropagation();


            var promise = $mdEditDialog.small({

                modelValue: student.name.first,
                placeholder: 'Add a comment',
                save: function (input) {
                    student.name.first = input.$modelValue;
                },
                targetEvent: event,
                validators: {
                    'md-maxlength': 30
                }
            });

            promise.then(function (ctrl) {
                var input = ctrl.getInput();

                input.$viewChangeListeners.push(function () {
                    input.$setValidity('test', input.$modelValue !== 'test');
                });
            });
        };
    });
