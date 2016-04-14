'use strict';

describe('Controller: TPChatCtrl', function () {

  // load the controller's module
  beforeEach(module('tpApp'));

  var TPChatCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TPChatCtrl = $controller('TPChatCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
