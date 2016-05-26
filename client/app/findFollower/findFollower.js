'use strict';

angular.module('tpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('findFollower', {
        url: '/findFollower',
        templateUrl: 'app/findFollower/findFollower.html',
        controller: 'TPFindFollowerAboutCtrl'
      });
  });
