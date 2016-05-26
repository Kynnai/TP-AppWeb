'use strict';
angular.module('tpApp')
  .controller('TPFollowerCtrl', function ($scope, $http) {
    $scope.btnFind = function(){
      location.href="/findFollower"
    }
  });
