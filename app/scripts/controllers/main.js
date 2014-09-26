'use strict';

angular.module('restaurantApp')
    .controller('MainCtrl', function($http, $scope, $window) {

        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        }

        $http({
            url: 'http://api.yelp.com/v2/business/yelp-san-francisco',
            method: "GET",
            params: {
                oauth_consumer_key: "V-fz717e6id9rjQojd65HQ",
                oauth_token: "dcB778UjN-2BSE0SS-eNpLKr0Yfowb1e",
                oauth_signature_method: "HMAC-SHA1",
                oauth_signature: "dwsbX4G8CviSL1BtD2vYYPAXd8g",
                oauth_timestamp: new Date().getTime(),
                oauth_nonce: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
            }
        }).then(function(res) {
            $scope.yelpApi = res.data;
        });
    });




// angular.module('restaurantApp')
//     .controller('MainCtrl', function($http, $scope, $window) {

//         $http({
//             url: 'http://coinabul.com/api.php',
//             method: "GET"

//         }).then(function(json) {
//             var item = json[Math.floor(Math.random()*json.length)];
//             $scope.yelpApi = json;
//         });
//     });
