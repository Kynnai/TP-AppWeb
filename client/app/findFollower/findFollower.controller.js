'use strict';
angular.module('tpApp')
  .controller('TPFindFollowerCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.allUsers = [];
    $scope.showFollowers = false;
    $scope.errorMessage = '';
    $scope.isConnected = false;
    $scope.isAdded = false;

    var me = localStorage.getItem('USER');
    var jwt = localStorage.getItem('JWT');
    if (jwt !== null) {
      $scope.isConnected = true;
    }

    $http({
        method: 'GET',
        url: 'https://appxapi.herokuapp.com/api/all/users'
      })
      .then(
        function successCallback(response) {
          if($scope.isConnected) {
            console.log(response);
            addUsersToList(response);
          }
        },
        function errorCallback(response) {
          $scope.errorMessage = 'Erreur serveur';
        });

    function addUsersToList(users){
      $http({
          method: 'GET',
          url: 'https://appxapi.herokuapp.com/api/all/follow/me'
        }
      )
        .then(
          function successCallback(response) {
            angular.forEach(users.data, function (user, key) {
              var isAlreadyAdded = false;
              angular.forEach(response.data, function(value, key) {
                if(value.follower_id == user.id){
                  isAlreadyAdded = true;
                }
                console.log(me);
                if(me == user.username){
                  isAlreadyAdded = true;
                }
              });
              $scope.allUsers.push({username: user.username, status: isAlreadyAdded, id: user.id, avatar: "http://www.reelviews.net/resources/img/default_poster.jpg"});
              $scope.showFollowers = true;
            })
          },
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';
          }
        );
      return false;
    }

    $scope.btnAddToFollower = function(follow) {
      $http({
          method: 'POST',
          url: 'https://appxapi.herokuapp.com/api/follow',
          data: {follower_id: follow.id, status: true}
        }
      )
        .then(
          function successCallback(response) {
            follow.status = true;
            console.log(response)
          }
          ,
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';
          }
        );
    };
  }]);
