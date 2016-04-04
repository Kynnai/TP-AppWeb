'use strict';

angular.module('tp1App')
  .controller('TP1SearchCtrl', function ($scope, $http) {

    $scope.movies = {};
    $scope.query ='';
    $scope.errorMessage ='';

    $scope.btnSearch = function(){
      $http({ method: 'GET',
              url: 'https://www.omdbapi.com/?',
              params: {s: $scope.query, type:'movie'},
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
          }
        )
    }
  });
