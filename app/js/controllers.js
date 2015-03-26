'use strict';

var colorController = angular.module('colorController', [])
	.controller('colorCtrl', function($scope, colorFactory) {
		$scope.colors = [];
		colorFactory.getColors().success(function(data){
			$scope.colors = data;
		});
	});

var swatchController = angular.module('swatchController',[])
	.controller('swatchCtrl', function($scope, sharedFactory, blendFactory) {
		$scope.blend = function(clr) {
			if (!sharedFactory.blendMode) {
	      sharedFactory.blendMode = !sharedFactory.blendMode;
	      sharedFactory.broadcastBlend(sharedFactory.blendMode);
	      var newBlend = new blendFactory.blendObj;
	      alert("blend instantiated");
     	} else {
     		alert("blend in progress");
     	}
			alert(clr);
    };
    $scope.$on('handleBroadcast', function() {
      $scope.blendMode = sharedFactory.blendMode;
    });
	});

var blendBtnController = angular.module('blendBtnController',[])
	.controller('blendBtnCtrl', function($scope, sharedFactory) {
    $scope.$on('handleBroadcast', function() {
      $scope.blendMode = sharedFactory.blendMode;
    });
	});

angular.module('ui.bootstrap').controller('modalCtrl', function ($scope, $modal, $log) {
	$scope.open = function (tmp) {
		var modalTmpUrl = "partials/modal/" + tmp + ".html";
		var modalInstance = $modal.open({
			templateUrl: modalTmpUrl,
			controller: 'ModalInstanceCtrl'
		});
		modalInstance.result.then(function () {
			$log.info('ok');
		}, function () {
			$log.info('dismiss');
		});
	};
});

angular.module('ui.bootstrap').controller('ModalInstanceCtrl', function ($scope, $modalInstance, sharedFactory) {
	$scope.ok = function () {
		sharedFactory.blendMode = !sharedFactory.blendMode;
    sharedFactory.broadcastBlend(sharedFactory.blendMode);
		$modalInstance.close();
	};
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
	$scope.$on('handleBroadcast', function() {
    $scope.blendMode = sharedFactory.blendMode;
  });
});

