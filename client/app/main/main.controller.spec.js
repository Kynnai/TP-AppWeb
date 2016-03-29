'use strict';
describe('TP1Ctrl', function () {
  // load the controller's module
  beforeEach(module('tp1App'));
  var $controller;
  beforeEach(inject(function (_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
  it('Retourne «Vrai» dans toute les situations', function () {
    expect(true).toEqual(true);
  });
});
//# sourceMappingURL=main.controller.spec.js.map
