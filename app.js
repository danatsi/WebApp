// script.js
//var ctrlogin = required('/api/controllers/login.controller.js');

// create the module and name it scotchApp
var MyApp = angular.module('MyApp', ["ui.router", "ngMaterial","angular-hamburglar"])



// configure our routes
    .config(function($stateProvider,$locationProvider,$urlRouterProvider)
    {
        $urlRouterProvider
            .otherwise('/');
        $stateProvider.state('shell.home',{
            url:'/',
            templateUrl:'pages/Home/home.html',
            controller:'HomeController'
        })

    })

