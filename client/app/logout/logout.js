'use strict';

angular.module('tpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/logout/logout.html',
        controller: 'LogoutCtrl'
      });
  });
