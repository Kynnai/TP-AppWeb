'use strict';

angular.module('tp1App')
  .controller('TP1RegistrationCtrl', function ($scope, $http) {
      
      $scope.hideSuccess = true;
      
      $scope.user = [{firstName: null},
                    {lastName: null},
                    {email: null},
                    {password: null},
                    {confPassword: null}];

      $scope.registrationMessage = [{body: null},
                                    {color: null}];

      $scope.messageServeur = [ {body: null},
                                {color: null},
                                {code: null}];

      $scope.btnSubmit = function(){
          $http({   method: 'POST',
                    url: 'http://crispesh.herokuapp.com/api/register',
                    data: {email: $scope.user.email,
                    password: $scope.user.password,
                    firstname: $scope.user.firstName,
                    lastname: $scope.user.lastName}
          })
              .then(
                  function successCallback() {
                      $scope.registrationMessage.body = "Votre inscription est confirmée!";
                      $scope.registrationMessage.color = "alert-success";
                      $scope.hideSuccess = false;
                  },
                  function errorCallback(response){
                      $scope.registrationMessage.color = "alert-danger";
                      if(response = 403){
                          $scope.registrationMessage.code = "403";
                          $scope.registrationMessage.body = "Non autorisé!";
                      }
                      else if(response = 410){
                          $scope.registrationMessage.code = "410";
                          $scope.registrationMessage.body = "Erreur de validations!";
                      }
                  }

              )
      };
  });
