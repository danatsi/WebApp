
'use strict';

angular.module('MyApp')
    .config(function ($stateProvider) {

        $stateProvider.state('shell.home',{
                url: '/home',
                templateUrl: './pages/Home/home.html',
                controller: 'HomeController'
            }

        )


    })
