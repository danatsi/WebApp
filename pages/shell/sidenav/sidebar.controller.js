/**
 * Created by Noy Yizchaki on 12/27/2017.
 */
'use strict';

angular.module('MyApp')
    .controller('SidebarController', function ($scope, $rootScope, $mdSidenav, $mdDialog,  $state) {
        $scope.logout = function () {
            Auth.logout();
        };

       // $scope.loggedInUser = Auth.getCurrentUser();
        $scope.loggedInUser = "Hello!";
         $scope.menuList = [{
            text: 'Home',
            state: 'shell.home',
            iconClass: 'home'
        },{
            text: 'Users',
            state: 'shell.users',
            iconClass: 'users'
        },{
            text: 'Students',
            state: 'shell.students',
            iconClass: 'students'
        },
             {
                 text: 'Login',
                 state: 'login',
                 iconClass: 'login'
             }];

      /*  $scope.navList = _.filter(navList, function () {
          //  var role = ($state.get(item.state).data || {}).requiredRole;
            return  true;
        });*/

        $scope.toggleMenu = function () {
            $mdSidenav('sideNav').toggle();
        }
    });
