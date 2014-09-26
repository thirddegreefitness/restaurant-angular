'use strict';

// angular.module('mytodoApp')
//   .controller('MainCtrl', function ($scope, localStorageService) {

//     var todosInStore = localStorageService.get('todos');

//     $scope.todos = todosInStore && todosInStore.split('\n') || [];

//     $scope.$watch('todos', function () {
//       localStorageService.add('todos', $scope.todos.join('\n'));
//     }, true);

//     $scope.addTodo = function () {
//       $scope.todos.push($scope.todo);
//       $scope.todo = '';
//     };

//     $scope.removeTodo = function (index) {
//       $scope.todos.splice(index, 1);
//     };

//   });

angular.module('mytodoApp')
.controller('FetchController', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
    $scope.method = 'GET';
    $scope.url = 'http://api.yelp.com/v2/search',

    // "retrieveYelp": function(name, callback) {
    //         $http.jsonp("http://api.yelp.com/v2/search?term=food&location=San+Francisco&callback=JSON_CALLBACK", {
    //             params: {
    //                 oauth_consumer_key: "V-fz717e6id9rjQojd65HQ",
    //                 oauth_token: "6oYKZgIYiMXKSgofWWYJDuhiukvX3JVk",
    //                 oauth_signature_method: "hmac-sha1",
    //                 oauth_signature: "xZCZ4a3vcp02VTvHlVXw5Kkb__k",
    //                 oauth_timestamp: new Date().getTime(),
    //                 oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    //             }
    //         }).success(callback);

    $scope.fetch = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
        success(function(data, status) {
          $scope.status = status;
          $scope.data = data;
        }).
        error(function(data, status) {
          $scope.data = data || "Request failed";
          $scope.status = status;
      });
    };

    $scope.updateModel = function(method, url) {
      $scope.method = method;
      $scope.url = url;
    };
  }]);