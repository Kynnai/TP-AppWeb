'use strict';

angular.module('tpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('playList', {
        url: '/playList',
        templateUrl: 'app/playList/playList.html',
        controller: 'PlayListCtrl'
      });
  });
