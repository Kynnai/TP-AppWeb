'use strict';

angular.module('tp1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'app/search/search.html',
        controller: 'TP1SearchCtrl'
      });
  });
