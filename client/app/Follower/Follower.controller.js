'use strict';
(function(){

function FollowerComponent($scope) {
  $scope.message = 'Hello';
}

angular.module('fs3App')
  .component('Follower', {
    templateUrl: 'app/Follower/Follower.html',
    controller: FollowerComponent
  });

})();
