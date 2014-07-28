'use strict';

var pully = pully || {};

pully.mock = function(){

  var mockPullList = function(){
    var comics = [
      new pully.Comic(1, 'Deadpool', 'Marvel', 15),
      new pully.Comic(2, 'Captain America', 'Marvel', 4),
      new pully.Comic(3, 'Avengers, The', 'Marvel', 24),
      new pully.Comic(4, 'Saga', 'Image', 15)
    ];
    return comics;
  };

  return {
    getPullList : mockPullList
  };
}();
