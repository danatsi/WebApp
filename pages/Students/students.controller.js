/**
 * Created by Noy Yizchaki on 12/24/2017.
 */
angular.module('MyApp').controller('StudentsController', function($scope, $http) {

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

    })
});