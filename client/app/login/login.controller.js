'use strict';
angular.module('tpApp')
  .controller('TPLoginCtrl', function ($scope, $http) {
    $scope.hideSuccess = true;

    $scope.user = [ {email: null},
                    {password: null}];
  });
