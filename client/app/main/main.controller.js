'use strict';
angular.module('tpApp')
  .controller('TPMainCtrl', function ($scope, $http) {

    $scope.movies = {};
    $scope.errorMessage ='';

    $scope.afficher = function(){
      $http({ method: 'GET',
              url: 'https://www.omdbapi.com/?',
              params: {s: 'the', type:'movie', y: 2016},
              timeout: 5000
             })
        .then(
          function successCallback(response){
            $scope.movies = response.data.Search;
          }
          ,
          function errorCallback(response){
            console.log(response);
            $scope.errorMessage= 'Erreur serveur';
          })
  }});

//# sourceMappingURL=main.controller.js.map
