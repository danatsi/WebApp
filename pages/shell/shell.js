/**
 * Created by Noy Yizchaki on 12/25/2017.
 */
'use strict';

angular.module('MyApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('shell', {
                abstract: true,
                templateUrl: 'pages/shell/shell.html',

            });
    });
