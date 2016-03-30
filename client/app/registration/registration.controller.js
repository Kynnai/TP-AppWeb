'use strict';

angular.module('tp1App')
  .controller('TP1RegistrationCtrl', function ($scope) {

    $scope.hideSuccess = true;

    /*$scope.user = [{firstName: null},
      {name: null},
      {email: null},
      {password: null},
      {confPassword: null}];

    $scope.errorMessage = [];
    $scope.alert = "";

    $scope.btnSubmit = function() {
      $scope.errorMessage = [];
      $scope.alert = "";

      if ($scope.user.firstName == null || $scope.user.firstName == "") {
        $scope.errorMessage.push("Prénom d'utilisateur vide");
      }
      if ($scope.user.name == null || $scope.user.name == "") {
        $scope.errorMessage.push("Nom d'utilisateur vide");
      }
      if ($scope.user.email == null || $scope.user.email == "") {
        $scope.errorMessage.push("Adresse courriel invalide");
      }
      if ($scope.user.password == null || $scope.user.password == "") {
        $scope.errorMessage.push("Mot de passe vide");
      }
      if ($scope.user.confPassword == null || $scope.user.confPassword == "") {
        $scope.errorMessage.push("Confirmation mot de passe vide");
      }
      else if($scope.user.password != $scope.user.confPassword){
        $scope.errorMessage.push("La confirmation du mot de passe n'est pas identique au mot de passe choisis")
      }

      if ($scope.errorMessage[0] != null) {
        $scope.alert = "alert alert-danger"
      }
      else{
        $scope.hideSuccess = false;
      }
    }

    $scope.btnReset = function(){
      $scope.user.firstName = null;
      $scope.user.name = null;
      $scope.user.email = null;
      $scope.user.password = null;
      $scope.user.confPassword = null;
    }*/
  });
