// script.js
//var ctrlogin = required('/api/controllers/login.controller.js');

// create the module and name it scotchApp
var MyApp = angular.module('MyApp', ["ngRoute", "ngMaterial"])

// configure our routes
    .config(function($routeProvider, $locationProvider)
    {
        $locationProvider.hashPrefix('');
        $routeProvider

        // route for the home page
            .when('/', {
                templateUrl : 'pages/Home/home.html',
                controller  : 'home.controller'
            })
            .when('/login',
                {

                    templateUrl : 'pages/Login/login.html',
                    controller  : 'login.controller'
                })
            // route for the about page
            .when('/students', {
                templateUrl : 'pages/Students/students.html',
                controller  : 'students.controller'
            })

            // route for the contact page
            .when('/users', {
                templateUrl : 'pages/Users/users.html',
                controller  : 'users.controller'
            });
    })

