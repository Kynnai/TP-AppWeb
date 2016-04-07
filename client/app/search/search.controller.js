'use strict';

angular.module('tpApp')
  .controller('TPSearchCtrl', function ($scope, $http) {

    $scope.movies = {};
    $scope.query ='';
    $scope.errorMessage ='';
    $scope.isConnected = false;
    $scope.isAdded = false;

    var jwt = localStorage.getItem('JWT');

    if(jwt !== null){
      $scope.isConnected = true;
    }

    $scope.addToFavorite = function(id){
      var movieId = id.substring(2);
      //console.log(movieId);
      //console.log(jwt);
      $http({ method: 'POST',
              url: 'https://crispesh.herokuapp.com/api/favs',
              data: {movie_id: movieId}
      }
      )
        .then(
          function successCallback(response){
            $scope.isAdded = true;
            console.log(response);
            reload();
          }
          ,
          function errorCallback(response){
            console.log(response);
            $scope.errorMessage= 'Erreur serveur';
          }
        )
    };

    $scope.btnSearch = function(){
      $http({ method: 'GET',
              url: 'https://www.omdbapi.com/?',
              params: {s: $scope.query, type:'movie'},
              timeout: 5000
            })
        .then(
          function successCallback(response){
            $scope.movies = response.data.Search;
            $scope.showMovies = true;
          }
          ,
          function errorCallback(response){
            console.log(response);
            $scope.errorMessage= 'Erreur serveur';
          }
        )
    }
  });
