'use strict';

describe('Component: FollowerComponent', function () {

  // load the controller's module
  beforeEach(module('fs3App'));

  var FollowerComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    FollowerComponent = $componentController('FollowerComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
