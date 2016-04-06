'use strict';

angular.module('tpApp')
  .controller('TPSearchCtrl', function ($scope, $http, Favoris) {

    $scope.movies = {};
    $scope.query ='';
    $scope.errorMessage ='';
    $scope.isConnected = false;
    $scope.isAdded = false;

    var jwt = localStorage.getItem('JWT');
    var user = localStorage.getItem('USER');

    if(jwt !== null){
      $scope.isConnected = true;
    }

    $scope.addToFavorite = function(id){
      var movieId = id.substring(2);
      console.log(movieId);
      $http({ method: 'POST',
              url: 'https://crispesh.herokuapp.com/?'+ user +'/api/favs/',
              params: {movie_id: movieId}}
      )
        .then(
          function successCallback(){
            $scope.isAdded = true;
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
