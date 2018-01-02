/**
 * Created by Noy Yizchaki on 12/27/2017.
 */

angular.module('MyApp')
    .config(function ($stateProvider) {

        $stateProvider.state('register',{
            url:'/register',
            templateUrl:'./pages/authentication/register/register.html',
            controller:'RegisterController'
        })
    })