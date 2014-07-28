'use strict';

var pully = pully || {};

/**
 * @ngdoc service
 * @name pullyApp.Pulllist
 * @description
 * # Pulllist
 * Service in the pullyApp.
 */
angular.module('pullyApp')
  .service('Pulllist', function Pulllist() {
    //Ensure models are loaded
    if(typeof pully.Comic === 'undefined'){ throw 'Comic model not found.'; }

    var getPullList = function(){
      return [
        new pully.Comic('Deadpool', 'Marvel', 15),
        new pully.Comic('Captain America', 'Marvel', 4),
        new pully.Comic('Avengers, The', 'Marvel', 24),
        new pully.Comic('Saga', 'Image', 15)
      ];
    };

    return {
      getPullList: getPullList
    };
  });
