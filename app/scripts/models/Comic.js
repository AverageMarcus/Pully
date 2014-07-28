'use strict';

var pully = pully || {};

pully.Comic = function(Series, Publisher, Issues){
  this.series = Series;
  this.publisher = Publisher;
  this.issues = Issues;
  this.created = new Date();
};

pully.Comic.prototype = {
  constructor: pully.Comic
};
