/**
 * Created by Noy Yizchaki on 12/27/2017.
 */
'use strict';

angular.module('MyApp')
    .controller('SidebarController', function ($scope, $rootScope, $mdSidenav, $mdDialog, Auth, $state) {
        $scope.logout = function () {
            Auth.logout();
        };

        $scope.loggedInUser = Auth.getCurrentUser();

        var menuList = [{
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
        }, {
            text: 'Students',
            state: 'shell.students',
            iconClass: 'account-multiple'
        }, {
            text: 'Schools',
            state: 'shell.schools',
            iconClass: 'settings'
        }, {
            text: 'Managers',
            state: 'shell.managers',
            iconClass: 'settings'
        }, {
            text: 'Teachers',
            state: 'shell.teachers',
            iconClass: 'settings'
        }, {
            text: 'Profile',
            state: 'shell.profile',
            iconClass: 'account'
        }];

        $scope.navList = _.filter(navList, function (item) {
            var role = ($state.get(item.state).data || {}).requiredRole;
            return role ? Auth.hasRole(role) : true;
        });

        $scope.toggleMenu = function () {
            $mdSidenav('sideNav').toggle();
        }
    });
