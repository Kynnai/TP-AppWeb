'use strict';
angular.module('tpApp')
  .controller('TPFollowerCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.error = false;
    $scope.errorMessages = [];
    $scope.emptyArrayMessage = "";
    $scope.followsArray = [];
    //$scope.usersList = [];

    $scope.btnFind = function(){
      location.href="/findFollower"
    };

    /*$http({
      method: 'GET',
      url: 'https://appxapi.herokuapp.com/api/all/users'
    })
      .then(
        function successCallback(response){
          console.log(response);
         // $scope.usersList = response;
        }
        ,
        function errorCallback(response){

        }
      );*/

    $scope.showFollows = function(){
      $http({
        method: 'GET',
        url: 'https://appxapi.herokuapp.com/api/all/follow/me'
      })
        .then(
          function successCallback(response){
            if(response.data.length == 0){
              $scope.emptyArrayMessage = "Vous n'avez pas encore d'abonnements ! Cliquez sur le bouton" +
                " \"Chercher des utilisateurs\" pour parcourir la liste des utilisateurs.";
            }
            $scope.followsArray = response.data;
            console.log($scope.followsArray);
          }
          ,
          function errorCallback(response){
            $scope.error = true;
            $scope.errorMessages.push(response);
          }
        )
    }
  }]);
