/**
 * Created by Noy Yizchaki on 12/27/2017.
 */
'use strict';

angular.module('MyApp')
    .controller('ToolbarController', function ($scope, $mdSidenav, $mdComponentRegistry)
    {
        $scope.isNavIconOpened = false;

        $scope.$watch(
                function () {
                    return $mdComponentRegistry.get('sideNav') ? $mdSidenav('sideNav').isOpen() : false;
                },
                function (newVal) {
                    $scope.isNavIconOpened = newVal;
                });

        $scope.toggleMenu = function () {
            $mdSidenav('sideNav').toggle();
        };
    });
