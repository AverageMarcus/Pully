'use strict';

/**
 * @ngdoc function
 * @name pullyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pullyApp
 */
angular.module('pullyApp')
  .filter('escape', function() {
    return window.encodeURIComponent;
  })
  .controller('MainCtrl',
    ['$scope', '$location', '$q', 'Pulllist', 'ComicVineAPI',
    function ($scope, $location, $q, pullist, comicVine) {
    $scope.pulls = pullist.pullList;
    $scope.sortBy = 'series';

    $scope.sort = function(sortBy){
      if($scope.sortBy === sortBy){
        sortBy = '-' + sortBy;
      }
      $scope.sortBy = sortBy;
    };

    $scope.comicDetails = function(id){
      $location.path('/comic-details/' + id);
    };

  }]);
