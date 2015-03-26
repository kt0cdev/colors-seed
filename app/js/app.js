'use strict';

var ColorApp = angular.module('ColorApp', [
	'ui.bootstrap',
  'ngRoute',
  'sharedServices',
  'colorService',
  'blendServices',
  'colorController',
  'swatchController',
  'blendBtnController',
  'colorSwatch',
  'newBtn',
  'saveBtn',
  'cancelBtn'
]);

ColorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/colors/list', {
        templateUrl: 'partials/color-list.html',
        controller: 'colorCtrl'
      }).
      when('/colors/blend', {
        templateUrl: 'partials/color-blend.html',
        controller: 'colorCtrl'
      }).
     otherwise({
        templateUrl: 'partials/color-blend.html',
        controller: 'colorCtrl'
      });
  }]);