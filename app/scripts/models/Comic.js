'use strict';

var pully = pully || {};

pully.Comic = function(Id, Series, Publisher, StartYear){
  this.id = Id;
  this.series = Series;
  this.publisher = Publisher;
  this.startYear = StartYear;
  this.created = new Date();
};

pully.Comic.prototype = {
  constructor: pully.Comic
};
