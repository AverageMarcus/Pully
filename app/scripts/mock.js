'use strict';

var pully = pully || {};

(function(){

  var mockPullList = function(){
    var comics = [
      new pully.Comic('Deadpool', 'Marvel', 15),
      new pully.Comic('Captain America', 'Marvel', 4),
      new pully.Comic('Avengers, The', 'Marvel', 24),
      new pully.Comic('Saga', 'Image', 15)
    ];
    return comics;
  };

  pully.getPullList = mockPullList;

}());
