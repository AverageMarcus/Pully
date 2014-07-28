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

    var getPullList = function getPullList(){

      if(pully.config && pully.config.environment === 'dev'){
        return pully.mock.getPullList();
      }else{
        return [

        ];
      }
    };

    return {
      getPullList: getPullList
    };
  });
