'use strict';

describe('Directive: movieComment', function () {

  // load the directive's module and view
  beforeEach(module('fs3App'));
  beforeEach(module('components/movieComment/movieComment.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<movie-comment></movie-comment>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the movieComment directive');
  }));
});
