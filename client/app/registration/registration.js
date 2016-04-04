'use strict';

angular.module('tp1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registration', {
        url: '/registration',
        templateUrl: 'app/registration/registration.html',
        controller: 'TP1RegistrationCtrl'
      });
  });
