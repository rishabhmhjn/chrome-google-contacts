'use strict';

console.log('app loaded');

var gContacts = angular.module('gContacts', []);

// register a new service
gContacts.value('appName', '__MSG_appName__');


gContacts.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    });

    $routeProvider.otherwise({
      redirectTo: '/login'
    });
  }
]);