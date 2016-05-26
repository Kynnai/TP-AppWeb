'use strict';

angular.module('tpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('follower', {
        url: '/follower',
        templateUrl: 'app/follower/follower.html',
        controller: 'TPFollowerCtrl'
      });
  });
