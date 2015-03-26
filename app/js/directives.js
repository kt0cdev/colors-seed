'use strict';

var colorSwatch = angular.module('colorSwatch', [])
	.directive('swatch', function() {
		return {
	    restrict: 'E',
	    templateUrl: 'partials/color-swatch.html',
	    link: function(scope, el, attr) {

	    }
	  }
	});

var newBtn = angular.module('newBtn', [])
	.directive('newbtn', function() {
		return {
	    templateUrl: 'partials/buttons/new-btn.html',
	    link: function(scope, el, attr) {

	    }
	  }
	});

var saveBtn = angular.module('saveBtn', [])
	.directive('savebtn', function() {
		return {
	    templateUrl: 'partials/buttons/save-btn.html',
	    link: function(scope, el, attr) {

	    }
	  }
	});

var cancelBtn = angular.module('cancelBtn', [])
	.directive('cancelbtn', function() {
		return {
	    templateUrl: 'partials/buttons/cancel-btn.html',
	    link: function(scope, el, attr) {

	    }
	  }
	});


