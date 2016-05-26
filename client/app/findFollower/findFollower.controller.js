'use strict';
(function(){

function FindFollowerComponent($scope) {
  $scope.message = 'Hello';
}

angular.module('fs3App')
  .component('findFollower', {
    templateUrl: 'app/findFollower/findFollower.html',
    controller: FindFollowerComponent
  });

})();
