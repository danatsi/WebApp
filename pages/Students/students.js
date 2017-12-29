
'use strict';

angular.module('MyApp')
    .config(function ($stateProvider) {

        $stateProvider.state('shell.students',{
                url: '/students',
                templateUrl: './pages/Students/students.html',
                controller: 'StudentsController'
            }

        )

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        $stateProvider.state(aboutState);
         })
