/**
 * Created by Noy Yizchaki on 12/27/2017.
 */

angular.module('MyApp').controller('RegisterController', function($scope,$http)
{
    $scope.message = " ";
    $scope.error = " ";

    // getting the json data
    $http.get('pages/Authentication/data.json').then(function (success) {
            $scope.usersLoginData = success.data;
            $scope.message = "Loaded users";
        }
        , function (error) {
            $scope.usersLoginData = error;
            $scope.error = "failed to load users";
        });

    $scope.appRegister = function () {
        $scope.message = 'Register !';

    };

    $scope.validatePassword = function()
    {
        var pasValid = true;

        if ($scope.user.passwordValidate !== $scope.user.password){
            pasValid = false;
        }

        $scope.signupForm.passwordValidate.$setValidity('notEqual', pasValid);
    };
});