'use strict';
angular.module('tpApp')
  .controller('TPLoginCtrl', function ($scope, $http, $rootScope) {
    $scope.hideSuccess = true;

    $scope.user = [ {email: null},
                    {password: null}];

    $scope.messageServeur = [{message: null}];
    $scope.loginMessageBoxColor = "";
    $scope.btnSubmit = function(){
      $http({   method: 'POST',
        url: 'http://crispesh.herokuapp.com/api/login_check',
        data: {username: $scope.user.email,
              password: $scope.user.password}
      })
        .then(
          function successCallback(data) {
            $scope.messageServeur = [{message: null}];
            $scope.messageServeur.push({message: "Connexion réussis"});
            $scope.messageServeur.push({message: null});
            $scope.loginMessageBoxColor = "alert-success";
            $scope.hideSuccess = false;
            $rootScope.username = $scope.user.email;
            $rootScope.$broadcast('user:logged',{});
            localStorage.setItem('JWT', data.data.token);
            console.log("Saving token to localstorage", data.data.token);
          },
          function errorCallback(response){
            $scope.loginMessageBoxColor = "alert-danger";
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
