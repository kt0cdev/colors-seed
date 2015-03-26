'use strict';

var sharedServices = angular.module('sharedServices', [])
	.factory('sharedFactory', function($rootScope) {

		var sharedService = {};
		sharedService.blendMode = false;

		sharedService.broadcastBlend = function(blendMode){
			this.blendMode = blendMode;
			this.broadcastItem();
		}

		sharedService.broadcastItem = function() {
      $rootScope.$broadcast('handleBroadcast');
    };

		return sharedService;

	});

var colorService = angular.module('colorService', [])
	.factory('colorFactory', function($http) {
	 return{
	  getColors : function() {
	    return $http({
	      url: 'colors/colors.json',
	      method: 'GET'
	    })
	  }
	 }
	});

var blendServices = angular.module('blendServices', [])
	.factory('blendFactory', function() {

		blendServices.blendObj = function() {
			this.layers = {};
		}

		return blendServices;

	});


