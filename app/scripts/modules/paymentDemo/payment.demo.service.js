var service = angular.module('paymentDemo.service',['ngResource']);

service.factory('Transaction', ['$resource','sysvars',
	function($resource,sysvars){
		return $resource(sysvars.back_domain+'/transaction/:id/',{},{
			'update': {method: 'PUT'},
			'query':	{method: 'GET',isArray:true}
		});
	}]);
