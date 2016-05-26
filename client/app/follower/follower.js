'use strict';

angular.module('fs3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('follower', {
        url: '/follower',
        template: '<follower></follower>'
      });
  });
