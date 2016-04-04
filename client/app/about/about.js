'use strict';

angular.module('tp1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'TP1AboutCtrl'
      });
  });
