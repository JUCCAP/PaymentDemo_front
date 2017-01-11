'use strict';
/**
 * Main module of the application.
 */
var app = angular.module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'ngRoute',
    'ngCookies',
    'smart-table',
    'ngStorage',
    'paymentDemo'
  ]);
  app.run(['$http','$cookies',function($http,$cookies){

  }]);

  app.config(['$httpProvider','$stateProvider','$ocLazyLoadProvider','$resourceProvider','$urlRouterProvider',
    function ($httpProvider,$stateProvider,$ocLazyLoadProvider,$resourceProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('payment/new');
    //$httpProvider.defaults.xsrfHeaderName='X-CSRFToken';
    //$httpProvider.defaults.xsrfCookieName='csrftoken';
    //$httpProvider.defaults.withCredentials = true;

    // $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
    //  return {
    //     'request': function (config) {
    //          config.headers = config.headers || {};
    //          if ($localStorage.token) {
    //              config.headers.Authorization = $localStorage.token;
    //          }
    //          return config;
    //      },
    //      'responseError': function (response) {
    //          if (response.status === 401 || response.status === 403) {
    //              delete $localStorage.token;
    //               delete $localStorage.user;
    //               delete $localStorage.client;
    //              $location.path('/log');
    //          }
    //          return $q.reject(response);
    //      }
    //    };
    //  }]);

    $resourceProvider.defaults.stripTrailingSlashes = false;

    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });


}]);
app.constant('sysvars',{

  // back_domain: 'http://127.0.0.1:1337',
  back_domain: 'http://camlab.website:1337',

});
