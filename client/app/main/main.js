'use strict';

angular.module('tp1App')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'TP1MainCtrl',
        controllerAs: 'main'
      });
  });
