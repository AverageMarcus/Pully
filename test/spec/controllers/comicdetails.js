'use strict';

describe('Controller: ComicdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('pullyApp'));

  var ComicdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComicdetailsCtrl = $controller('ComicdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
