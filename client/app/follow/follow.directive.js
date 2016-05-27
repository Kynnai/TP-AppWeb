'use strict';

angular.module('tpApp')
  .directive('appxFollow', ["$http", function ($http) {
    return {
      templateUrl: 'app/follow/follow.html',
      restrict: 'E',
      link: function (scope) {
        scope.btnAddToFollower = function(follow) {
          $http({
              method: 'POST',
              url: 'https://appxapi.herokuapp.com/api/follow',
              data: {user_id: scope.me.id, follower_id: follow.data.id, status: true}
            }
          )
            .then(
              function successCallback(response) {
                follow.status = true;
              }
              ,
              function errorCallback(response) {
                scope.errorMessage = response.statusText
              }
            );
        };
      }
    };
  }]);
