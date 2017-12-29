
'use strict';

angular.module('MyApp')
    .config(function ($stateProvider) {

        $stateProvider.state('shell.students',{
                url: '/students',
                templateUrl: './pages/Students/students.html',
                controller: 'StudentsController'
            }

        )


         })
