'use strict';

describe('Directive: follow', function () {

  // load the directive's module and view
  beforeEach(module('fs3App'));
  beforeEach(module('app/follow/follow.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<follow></follow>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the follow directive');
  }));
});
