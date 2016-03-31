'use strict';

describe('Controller: PlayListCtrl', function () {

  // load the controller's module
  beforeEach(module('tpApp'));

  var PlayListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayListCtrl = $controller('PlayListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
