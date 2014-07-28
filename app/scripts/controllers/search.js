'use strict';

/**
 * @ngdoc function
 * @name pullyApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the pullyApp
 */
angular.module('pullyApp')
  .controller('SearchCtrl',
    ['$scope', '$location', '$q', 'Pulllist', 'ComicVineAPI',
    function ($scope, $location, $q, pullist, comicVine) {
    $scope.sortBy = '-start_year';
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
        //$scope.searchResults = comicVine.findSeries($scope.searchQuery);
        comicVine.findSeries($scope.searchQuery)
          .then(function success(value){
            $scope.searchResults = value;
          }, function(value){
            //Fail
          });
        $scope.showSearch = false;
        $scope.searchQuery = '';
      }
    };

    $scope.clearResults = function(){
      $scope.searchResults = [];
    };

    $scope.addComic = function(id){
      comicVine.getVolume(id)
        .then(function success(comic){
          pullist.addComic(comic);
        }, function failed(){

        });
      $scope.searchResults = [];
    };

  }]);
