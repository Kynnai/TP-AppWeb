'use strict';

angular.module('fs3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Follower', {
        url: '/Follower',
        template: '<follower></follower>'
      });
  });
