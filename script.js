// script.js

// create the module and name it scotchApp
var MyApp = angular.module('MyApp', ["ngRoute", "ngMaterial"])

// configure our routes
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/login', {
            templateUrl : 'pages/login.html',
            controller  : 'loginController'
        })
        // route for the about page
        .when('/students', {
            templateUrl : 'pages/students.html',
            controller  : 'studentsController'
        })

        // route for the contact page
        .when('/users', {
            templateUrl : 'pages/users.html',
            controller  : 'userController'
        });
})

    .controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
})

// create the controller and inject Angular's $scope
    .controller('loginController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
})
    .controller('studentsController', function($scope) {
    $scope.message = 'Look! I am an about page.';
})

    .controller('userController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
})