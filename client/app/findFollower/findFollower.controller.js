'use strict';
angular.module('tpApp')
  .controller('TPFindFollowerCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.allUsers = [];
    $scope.showFollowers = false;
    $scope.errorMessage = "";
    $scope.isConnected = false;
    $scope.isAdded = false;

    var myUsername = localStorage.getItem('USER');
    var jwt = localStorage.getItem('JWT');
    $scope.me = "";
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
            //console.log(response);
            addUsersToList(response);
          }
        },
        function errorCallback(response) {
          $scope.errorMessage = response.statusText + " rechargement en cours";
          if(response.status == 500){
            location.reload();
          }
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
                if(myUsername == user.username){
                  isAlreadyAdded = true;
                  $scope.me = user;
                }
              });
              $scope.allUsers.push({username: user.username, status: isAlreadyAdded, data: user, avatar: "http://www.reelviews.net/resources/img/default_poster.jpg"});
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
      console.log({user_id: $scope.me.id, follower_id: follow.data.id, status: true});
      $http({
          method: 'POST',
          url: 'https://appxapi.herokuapp.com/api/follow',
          data: {user_id: $scope.me.id, follower_id: follow.data.id, status: true}
        }
      )
        .then(
          function successCallback(response) {
            follow.status = true;
            //console.log(response)
          }
          ,
          function errorCallback(response) {
            $scope.errorMessage = response.statusText
          }
        );
    };
  }]);
