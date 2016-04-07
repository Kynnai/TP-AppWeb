'use strict';

describe('Controller: TPPlayListCtrl', function () {

  // load the controller's module
  beforeEach(module('tpApp'));

  var TPPlayListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TPPlayListCtrl = $controller('TPPlayListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
