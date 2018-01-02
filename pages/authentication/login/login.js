/**
 * Created by danatsirulnik on 30/12/2017.
 */
var MyApp = angular.module('MyApp')



// configure our routes
    .config(function($stateProvider)
    {

        $stateProvider.state('login',{
            url:'/login',
            templateUrl:'pages/authentication/login/login.html',
            controller:'LoginController'
        })

    })

