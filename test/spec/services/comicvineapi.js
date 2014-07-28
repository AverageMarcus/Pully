'use strict';

describe('Service: Comicvineapi', function () {

  // load the service's module
  beforeEach(module('pullyApp'));

  // instantiate service
  var Comicvineapi;
  beforeEach(inject(function (_Comicvineapi_) {
    Comicvineapi = _Comicvineapi_;
  }));

  it('should do something', function () {
    expect(!!Comicvineapi).toBe(true);
  });

});
