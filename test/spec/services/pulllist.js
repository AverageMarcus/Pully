'use strict';

describe('Service: Pulllist', function () {

  // load the service's module
  beforeEach(module('pullyApp'));

  // instantiate service
  var Pulllist;
  beforeEach(inject(function (_Pulllist_) {
    Pulllist = _Pulllist_;
  }));

  it('should do something', function () {
    expect(!!Pulllist).toBe(true);
  });

});
