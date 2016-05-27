'use strict';
angular.module('tpApp')
  .controller('TPFollowerCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.error = false;
    $scope.errorMessages = [];
    $scope.emptyArrayMessage = "";
    $scope.listFollows = [];

    $scope.btnFind = function(){
      location.href="/findFollower"
    };

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
            angular.forEach(response.data, function(aFollow, key){
              $scope.listFollows.push({follow: aFollow, avatar:"http://www.reelviews.net/resources/img/default_poster.jpg"});
            });
          }
          ,
          function errorCallback(response){
            $scope.error = true;
            $scope.errorMessages.push(response);
          }
        )
    }
  }]);
