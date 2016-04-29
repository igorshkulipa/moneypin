'use strict';
var toggle = false;
angular.module('sencoiney', [])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/action', {
            templateUrl: 'views/action.html',
            controller: 'ActionCtrl',
        })
         .when('/inout', {
             templateUrl: 'views/inout.html',
             controller: 'InOutCtrl',
         })
        .otherwise({
            redirectTo: '/action'
        });
  });


