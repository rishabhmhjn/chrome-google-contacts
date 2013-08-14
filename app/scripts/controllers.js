'use strict';

console.log('controllers loaded');


gContacts.controller("LoginCtrl", ['$scope', 'oauth',
  function($scope, oauth) {

    $scope.initLogin = function initLogin() {

      oauth.authorize(function() {

        console.log("on authorize");

      });

    };

  }
]);