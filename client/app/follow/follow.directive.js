'use strict';

angular.module('tpApp')
  .directive('follow', function () {
    return {
      templateUrl: 'app/follow/follow.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });
