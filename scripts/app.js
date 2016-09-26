(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.message = "";
  $scope.dishes = '';
  $scope.showResult = function () {
  	var array = $scope.dishes.split(',');
	if (array.length < 4 && array.length > 0 && $scope.dishes != '') {
    	$scope.message = "Enjoy!";
    }
    else if (array.length >= 4) {
    	$scope.message = "Too much!";
    }
    else if(array.length == 0 || $scope.dishes == '') {
  		$scope.message = "Please enter data first";
  	}
  };
}
})();
