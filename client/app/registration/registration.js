'use strict';

angular.module('tpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registration', {
        url: '/registration',
        templateUrl: 'app/registration/registration.html',
        controller: 'TPRegistrationCtrl'
      });
  });
