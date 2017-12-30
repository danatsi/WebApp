/**
 * Created by danatsirulnik on 30/12/2017.
 */
angular.module('MyApp').factory('$auth', function ($q) {
    var auth = {};
    var currentUser ;

    auth.isLoggedIn = function () {
        return $q(function (resolve, reject) {
            resolve(true);
        });
    };

    auth.currentUser = function () {
        console.log(currentUser);
        return $q(function (resolve, reject) {
            if (currentUser){
                return resolve(currentUser);
            }
            else{
                return reject();
            }
        });
    };

    auth.login = function (userName, password) {
        //Send request to server.
        return $q(function (resolve, reject) {
            if (userName == "admin" && password =='1234'){
                currentUser = "admin";
                return resolve ();
            }
            else {
                return reject ("YOU ARE WRONG! USER NAME IS admin PASS is 1234")
            }
        });
    };


    return auth;
});