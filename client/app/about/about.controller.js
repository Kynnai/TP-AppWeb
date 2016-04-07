'use strict';
angular.module('tpApp')
  .controller('TPAboutCtrl', function ($scope, $http) {

      $scope.hideSuccess = true;

      $scope.user = [{name: null},
                    {email: null},
                    {reason: null},
                    {message: null}];

      $scope.myReason = [{description: 'Bug trouvé'},
                       {description: 'Commentaire'},
                       {description: 'Plainte'},
                       {description: 'Recommendations'}];

      $scope.aboutMessage  = [{body: null},
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
                  function successCallback(response) {
                    $scope.aboutMessage.body = "Nous avons bien reçu votre message!";
                    $scope.aboutMessage.color = "alert-success";
                  },
                  function errorCallback(response){
                    $scope.aboutMessage.body = 'Erreur serveur!';
                    $scope.aboutMessage.color = "alert-warning";
                  }
              )
      };
  });
