'use strict';
(function(){

function FollowerComponent($scope) {
  $scope.message = 'Hello';
}

angular.module('fs3App')
  .component('follower', {
    templateUrl: 'app/follower/follower.html',
    controller: FollowerComponent
  });

})();
