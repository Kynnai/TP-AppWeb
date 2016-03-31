'use strict';

angular.module('tpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'TPAboutCtrl'
      });
  });
