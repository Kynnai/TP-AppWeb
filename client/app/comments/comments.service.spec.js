'use strict';

describe('Service: comments', function () {
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

});
//# sourceMappingURL=main.controller.spec.js.map
