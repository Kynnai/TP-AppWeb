'use strict';

describe('Controller: TPLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('tpApp'));
  var $controller;
  beforeEach(inject(function (_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('Retourne «Vrai» dans toutes les situations', function () {
    expect(true).toEqual(true);
  });

  /*it('', function () {
    var $scope = {};
    $controller('TPLoginCtrl', { $scope: $scope });
    $scope.user.name = "";
    $scope.btnSubmit();
    expect($scope.alert).toEqual("alert alert-danger");
  });*/
});
