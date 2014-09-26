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
    .config(['localStorageServiceProvider',
        function(localStorageServiceProvider) {
            localStorageServiceProvider.setPrefix('ls');
        }
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/blog', {
              templateUrl: 'views/blog.html',
              controller: 'BlogCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
