'use strict';

/**
 * @ngdoc service
 * @name pullyApp.Comicvineapi
 * @description
 * # Comicvineapi
 * Service in the pullyApp.
 */
angular.module('pullyApp')
  .service('ComicVineAPI', ['$http', '$q', function Comicvineapi($http, $q) {
    var findSeries = function findSeries(searchQuery){
      var deferred = $q.defer();
      var volumes = [];

      $http({
        method: 'JSONP',
        url: 'http://beta.comicvine.com/api/search/?api_key='+pully.config.comic_vine_api_key+'&query='+searchQuery+'&resources=volume&field_list=name,publisher,start_year,id&format=jsonp&json_callback=JSON_CALLBACK'
      })
      .success(function(data, status, headers, config) {
        if(data.error === 'OK'){
          $.each(data.results, function(i, item){
            volumes.push(item);
          });
          deferred.resolve({
            searchQuery : searchQuery,
            results : volumes
          });
        }
      })
      .error(function(data, status, headers, config) {
        deferred.reject('Failed');
      });
      return deferred.promise;
    };

    var getVolume = function getVolume(id){
      var deferred = $q.defer();

      $http({
        method: 'JSONP',
        url: 'http://beta.comicvine.com/api/volume/4050-'+id+'/?api_key='+pully.config.comic_vine_api_key+'&format=jsonp&json_callback=JSON_CALLBACK'
      })
      .success(function(data, status, headers, config) {
        if(data.error === 'OK'){
          var comic = new pully.Comic(data.results.id, data.results.name, data.results.publisher.name, data.results.start_year);
          deferred.resolve(comic);
        }
      })
      .error(function(data, status, headers, config) {
        deferred.reject('Failed');
      });
      return deferred.promise;
    };

    return {
      findSeries: findSeries,
      getVolume : getVolume
    };
  }]);
