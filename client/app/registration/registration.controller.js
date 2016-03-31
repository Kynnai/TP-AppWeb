'use strict';

angular.module('tpApp')
  .controller('TPRegistrationCtrl', function ($scope, $http) {
      
      $scope.hideSuccess = true;
      
      $scope.user = [{firstName: null},
                    {lastName: null},
                    {email: null},
                    {password: null},
                    {confPassword: null}];

      $scope.registrationMessage = {color: null};

      $scope.messageServeur = [{message: null}];

      $scope.btnSubmit = function(){
          $http({   method: 'POST',
                    url: 'http://crispesh.herokuapp.com/api/register',
                    data: {email: $scope.user.email,
                    password: $scope.user.password,
                    firstname: $scope.user.firstName,
                    lastname: $scope.user.lastName}
          })
              .then(
                  function successCallback(response) {
                      $scope.messageServeur = [{message: null}];
                      $scope.messageServeur.push({message: "Votre inscription est confirmée!"});
                      $scope.messageServeur.push({message: null});
                      $scope.registrationMessage.color = "alert-success";
                      $scope.hideSuccess = false;
                  },
                  function errorCallback(response){
                      $scope.registrationMessage.color = "alert-danger";
                      $scope.messageServeur = [{message: null}];
                      $scope.messageServeur.push({message: response.data.code + " " + response.data.message});
                      $scope.messageServeur.push({message: null});
                      angular.forEach(response.data.errors, function(value, key){
                          $scope.messageServeur.push({message: value.property_path.concat(" : ").concat(value.message)});
                      });
                      $scope.messageServeur.push({message: null});
                  }
              )
      };
  });
