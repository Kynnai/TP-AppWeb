'use strict';

describe('Component: FindFollowerComponent', function () {

  // load the controller's module
  beforeEach(module('tpApp'));

  var FindFollowerComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    FindFollowerComponent = $componentController('FindFollowerComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
