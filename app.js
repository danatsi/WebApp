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
                templateUrl : 'pages/home/home.html',
                controller  : 'HomeController'
            })
            .when('/login',
                {

                    templateUrl : 'pages/authentication/login/login.html',
                    controller  : 'LoginController'
                })

            // route for the contact page
            .when('/register', {
                templateUrl : 'pages/authentication/register/register.html',
                controller  : 'RegisterController'
            })
            // route for the about page
            .when('/students', {
                templateUrl : 'pages/students/students.html',
                controller  : 'StudentsController'
            })

            // route for the contact page
            .when('/users', {
                templateUrl : 'pages/users/users.html',
                controller  : 'UsersController'
            });
    })

