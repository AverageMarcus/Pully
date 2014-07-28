'use strict';

/**
 * @ngdoc function
 * @name pullyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pullyApp
 */
angular.module('pullyApp')
  .controller('MainCtrl', ['$scope', 'Pulllist', function ($scope, pullist) {
    $scope.pulls = pullist.getPullList();
    $scope.sortBy = 'series';

    $scope.sort = function(sortBy){
      if($scope.sortBy === sortBy){
        sortBy = '-' + sortBy;
      }
      $scope.sortBy = sortBy;
    };
  }]);
