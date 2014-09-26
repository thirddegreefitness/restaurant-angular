'use strict';

angular.module('restaurantApp')
  .controller('MainCtrl', function ($http, $scope) {
    $http.get('http://api.yelp.com/v2/search')
       .then(function(res){
          $scope.todos = res.data;                
        });
  });