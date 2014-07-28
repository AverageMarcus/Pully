'use strict';

/**
 * @ngdoc service
 * @name pullyApp.Comicvineapi
 * @description
 * # Comicvineapi
 * Service in the pullyApp.
 */
angular.module('pullyApp')
  .service('ComicVineAPI', function Comicvineapi() {
    var findSeries = function findSeries(searchQuery){
      //TODO: Search comic vine and return possible results
      return {
        searchQuery : searchQuery,
        results : ['test']
      };
    };

    return {
      findSeries: findSeries
    };
  });
