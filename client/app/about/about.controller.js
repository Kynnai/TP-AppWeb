'use strict';
angular.module('tp1App')
  .controller('TP1AboutCtrl', function ($scope, $http) {

      $scope.user = [{name: null},
                    {email: null},
                    {reason: null},
                    {message: null}];

      $scope.hideSuccess = true;

      $scope.myReason = [{description: null},
                       {description: 'Bug trouvé'},
                       {description: 'Commentaire'},
                       {description: 'Plainte'},
                       {description: 'Recommendations'}];

      $scope.sendMessage  = [{body: null},
                            {color: null}];

      $scope.btnSend = function() {

          $scope.hideSuccess = false;

          $http({   method: 'POST',
                    url: 'http://crispesh.herokuapp.com/api/contact',
                    data: { email: "movieapi@yopmail.com",
                            reason: $scope.user.reason,
                            body: $scope.user.message,
                            name: $scope.user.name}
          })
              .then(
                  function successCallback() {
                          $scope.sendMessage.body = "Nous avons bien reçu votre message!";
                          $scope.sendMessage.color = "alert-success";
                  },
                  function errorCallback(){
                      $scope.sendMessage= 'Erreur serveur!';
                      $scope.sendMessage.color = "alert-warning";
                  }
              )
      };
  });
