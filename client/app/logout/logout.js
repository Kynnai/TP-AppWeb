'use strict';

angular.module('fs3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/logout/logout.html',
        controller: 'LogoutCtrl'
      });
  });