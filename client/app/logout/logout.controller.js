'use strict';

angular.module('tpApp')
  .controller('TPLogoutCtrl', function ($scope) {
    localStorage.removeItem('JWT');
    localStorage.removeItem('USER');
    location.href="/main"
  });
