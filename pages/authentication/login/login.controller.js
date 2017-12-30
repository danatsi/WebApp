/**
 * Created by Noy Yizchaki on 12/23/2017.
 */

angular.module('MyApp').controller('LoginController', function ($scope, $location, $http, $auth,$state) {//, $window, $state, Auth) {
    $scope.message = "";
    $scope.error = "";


    // getting the json data
    $http.get('pages/Authentication/data.json').then(function (success) {
            $scope.usersLoginData = success.data;
            $scope.message = "Loaded users";
        }
        , function (error) {
            $scope.usersLoginData = error;
            $scope.error = "failed loading users";
        });


    $scope.appLogin = function () {

        $auth.login($scope.userid, $scope.password).then(function () {

           $state.go('shell.home');
        });

        // checking if there is user By that name
        /*  var user  =  _.find( $scope.usersLoginData, function(o) { if(o.userid ==$scope.userid){ return o;} else{return null;} });
         $location.path("/home");

         if(user== null )
         {
         $scope.message = 'Wrong exist';
         }
         else if (  user.password == $scope.password) {
         $scope.message = 'Logged in!';
         $scope.loggedInUser = user;
         }
         else {
         $scope.message = "Wrong password";
         }*/

    };

    $scope.register = function () {
        $scope.message = ' Register!';

        $location.path("/register");
    };

    $scope.cancle = function () {
        $scope.message = 'Cancle!';
    };
});
