'use strict';

angular.module('tp1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('playList', {
        url: '/playList',
        templateUrl: 'app/playList/playList.html',
        controller: 'PlayListCtrl'
      });
  });
