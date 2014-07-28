'use strict';

/**
 * @ngdoc function
 * @name pullyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pullyApp
 */
angular.module('pullyApp')
  .controller('MainCtrl',
    ['$scope', '$location', 'Pulllist', 'ComicVineAPI',
    function ($scope, $location, pullist, comicVine) {
    $scope.pulls = pullist.getPullList();
    $scope.sortBy = 'series';
    $scope.searchResults = [];
    $scope.showSearch = false;

    $scope.toggleSearch = function(){
      $scope.showSearch = true;
      setTimeout(function(){
        //We need to wait for the box to be visible
        jQuery('#searchBox').focus();
      }, 500);
    };

    $scope.sort = function(sortBy){
      if($scope.sortBy === sortBy){
        sortBy = '-' + sortBy;
      }
      $scope.sortBy = sortBy;
    };

    $scope.search = function(event){
      if(event.which && event.which === 13){
        $scope.clearResults();
        $scope.searchResults = comicVine.findSeries($scope.searchQuery);
        $scope.showSearch = false;
        $scope.searchQuery = '';
      }
    };

    $scope.clearResults = function(){
      $scope.searchResults = [];
    };

    $scope.comicDetails = function(id){
      $location.path('/comic-details/' + id);
    };

  }]);
