'use strict';

angular.module('tpApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'TP1MainCtrl',
        controllerAs: 'main'
      });
  });
