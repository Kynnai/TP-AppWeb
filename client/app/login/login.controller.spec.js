'use strict';

describe('Controller: TPLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('tpApp'));

  var TPLoginCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TPLoginCtrl = $controller('TPLoginCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
