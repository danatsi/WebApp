/**
 * Created by Noy Yizchaki on 12/27/2017.
 */

angular.module('MyApp').controller('RegisterController', function($scope,$http,$state,$auth)
{
    $scope.message = " ";
    $scope.error = " ";

    $scope.appRegister = function () {
        var result =  $auth.register($scope.user);

        $scope.message = result.$$state.value;
    };

    // validate in the form level the confirmed password
    $scope.validatePassword = function()
    {
        var pasValid = true;

        if (($scope.user.passwordValidate !== $scope.user.password) &&($scope.registerForm.passwordValidate.$touched)){
            pasValid = false;
        }

        $scope.registerForm.passwordValidate.$setValidity('notEqual', pasValid);
        $scope.registerForm.passwordValidate.$setValidity('required', false);

    };

});