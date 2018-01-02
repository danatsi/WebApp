// script.js
//var ctrlogin = required('/api/controllers/login.controller.js');

// create the module and name it scotchApp
var MyApp = angular.module('MyApp', ["ui.router", "ngMaterial","angular-hamburglar","md.data.table","fixed.table.header"])



// configure our routes
    .config(function($stateProvider,$locationProvider,$urlRouterProvider)
    {
        $urlRouterProvider
            .otherwise('/');
        $stateProvider.state('login',{
            url:'/',
            templateUrl:'pages/authentication/login/login.html',
            controller:'LoginController'
        })

    })

