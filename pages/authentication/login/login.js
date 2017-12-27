/**
 * Created by Noy Yizchaki on 12/27/2017.
 */
'use strict';

angular.module('MyApp')
    .config(function ($stateProvider)
    {
        $stateProvider
            .state('shell.login', {
                url: '/login',
                params: {popupMessage: ''},
                templateUrl: 'pages/authentication/login/login.html',
                controller: 'login.controller',
                data: {
                    loginNotRequired: true,
                    loggedInForbidden: true
                }
            });
    });