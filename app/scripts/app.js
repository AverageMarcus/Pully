'use strict';

/**
 * @ngdoc overview
 * @name pullyApp
 * @description
 * # pullyApp
 *
 * Main module of the application.
 */
angular
  .module('pullyApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/comic-details/:id', {
        templateUrl: '/views/comic-details.html',
        controller: 'ComicDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
