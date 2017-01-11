'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */angular.module('sbAdminApp')
	.directive('header',function(){
		return {
	        templateUrl:'scripts/directives/header/header.html',
	        restrict: 'E',
	        replace: true,
	        scope: {

	        },
	        controller:function($scope,$localStorage){
	        	$scope.user = $localStorage.user;
	        	$scope.logout = function () {
			       
			   };
	        }
    	}
	});

angular.module('sbAdminApp')
	.directive('capitalize', function() {
	   return {
	     require: 'ngModel',
	     link: function(scope, element, attrs, modelCtrl) {
	        var capitalize = function(inputValue) {
	           if(inputValue == undefined) inputValue = '';
	           var capitalized = inputValue.toUpperCase();
	           if(capitalized !== inputValue) {
	              modelCtrl.$setViewValue(capitalized);
	              modelCtrl.$render();
	            }
	            return capitalized;
	         }
	         modelCtrl.$parsers.push(capitalize);
	         capitalize(scope[attrs.ngModel]);  // capitalize initial value
	     }
	   };
	});
