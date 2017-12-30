'use strict';

angular.module('MyApp')
    .config(function ($stateProvider) {

        $stateProvider.state('shell.home', {
                url: '/',
                templateUrl: './pages/Home/home.html',
                controller: 'HomeController',
                resolve: {
                    currUser: function ($auth, $q) {
                        return $q(function (resolve,reject) {
                            $auth.currentUser().then(resolve).catch(function () {
                                reject({redirectTo:'login'});
                            });

                        });
                        //$auth.currentUser().catch(function () {
                         //  return {redirectTo:'login'};
                      //  });
                    }
                }
            }
        )


    }).run(function ($state) {

    $state.defaultErrorHandler(function(error) {
        console.log("?!",error.detail.redirectTo, error);
        // make noise
        if (error.detail.redirectTo) {
            $state.go(error.detail.redirectTo);
        } else {
            $state.go('error', {status: error.status})
        }
    });





});