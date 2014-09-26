'use strict';

angular
    .module('mytodoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.sortable',
        'LocalStorageModule'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'FetchController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

// var mytodoApp = angular.module('mytodoApp')

// function randomString(length, chars) {
//     var result = '';
//     for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
//     return result;
// }

// mytodoApp.factory("mytodoApp", function($http) {
//     return {
//         "retrieveYelp": function(name, callback) {
//             $http.jsonp("http://api.yelp.com/v2/search?term=food&location=San+Francisco&callback=JSON_CALLBACK", {
//                 params: {
//                     oauth_consumer_key: "V-fz717e6id9rjQojd65HQ",
//                     oauth_token: "6oYKZgIYiMXKSgofWWYJDuhiukvX3JVk",
//                     oauth_signature_method: "hmac-sha1",
//                     oauth_signature: "xZCZ4a3vcp02VTvHlVXw5Kkb__k",
//                     oauth_timestamp: new Date().getTime(),
//                     oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
//                 }
//             }).success(callback);

//         }
//     }
// });