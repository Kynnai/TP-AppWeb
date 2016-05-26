'use strict';
angular.module('tpApp')
  .controller('TPFollowerCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.btnFind = function(){
      location.href="/findFollower"
    }
  }]);
