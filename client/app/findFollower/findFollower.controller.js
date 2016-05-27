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
            addUsersToList(response);
          }
        },
        function errorCallback(response) {
          $scope.errorMessage = response.statusText;
          if(response.status == 500){
            $scope.errorMessage += " rechargement en cours";
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
  }]);
