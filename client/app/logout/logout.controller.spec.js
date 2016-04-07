'use strict';

describe('Controller: TPLogoutCtrl', function () {

  // load the controller's module
  beforeEach(module('tpApp'));

  var LogoutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogoutCtrl = $controller('TPLogoutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
