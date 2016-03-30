'use strict';
angular.module('tp1App')
  .controller('TP1AboutCtrl', function ($scope) {

    $scope.hideSuccess = true;

    $scope.myReason = [{description: null},
                       {description: 'Bug trouvé'},
                       {description: 'Commentaire'},
                       {description: 'Plainte'},
                       {description: 'Recommendations'}];

    /*$scope.user = [{name: null},
                   {reason: null},
                   {email: null},
                   {message: null}];

    /*$scope.errorMessage = [];
    $scope.alert = "";

    $scope.btnSend = function() {
      $scope.errorMessage = [];
      $scope.alert = "";
      if ($scope.user.name == null || $scope.user.name == "") {
        $scope.errorMessage.push("Nom d'utilisateur vide");
      }
      if ($scope.user.reason == null || $scope.user.reason == "") {
        $scope.errorMessage.push("Vous devez sélectionner une raison");
      }
      if ($scope.user.email == null || $scope.user.email == "") {
        $scope.errorMessage.push("Adresse courriel invalide");
      }
      if ($scope.user.message == null || $scope.user.message == "") {
        $scope.errorMessage.push("Message vide");
      }
      if($scope.errorMessage[0] != null){
        $scope.alert = "alert alert-danger"
      }
      else{
        $scope.hideSuccess = false;
      }

    }
    $scope.btnReset = function(){
      $scope.user.name = null;
      $scope.user.reason = null;
      $scope.user.email = null;
      $scope.user.message = null;
      }*/
  });
