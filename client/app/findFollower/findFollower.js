'use strict';

angular.module('fs3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('findFollower', {
        url: '/findFollower',
        template: '<find-follower></find-follower>'
      });
  });
