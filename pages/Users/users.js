/**
 * Created by danatsirulnik on 29/12/2017.
 */
'use strict'
angular.module('MyApp')
    .config(function ($stateProvider) {
        $stateProvider.state('shell.users',{
            url: '/users',
            templateUrl:'./pages/Users/users.html',
            controller: 'UsersController'

        })

    })

