'use strict';

angular.module('tpApp')
  .controller('TPSearchCtrl', function ($scope, $http) {

    $scope.movies = [];
    $scope.query ='';
    $scope.errorMessage ='';
    $scope.isConnected = false;
    $scope.isAdded = false;

    var jwt = localStorage.getItem('JWT');
    if(jwt !== null){
      $scope.isConnected = true;
    }

    $scope.addToFavorite = function(movie){
      $http({ method: 'POST',
              url: 'https://crispesh.herokuapp.com/api/favs',
              data: {movie_id: movie.my.imdbID}
      })
        .then(
          function successCallback(response){
            movie.isAdded = true;
          },
          function errorCallback(response){
            $scope.errorMessage= 'Erreur serveur';
          })
    };

    $scope.btnSearch = function(){
      $http({ method: 'GET',
              url: 'https://www.omdbapi.com/?',
              params: {s: $scope.query, type:'movie'},
              timeout: 5000
            })
        .then(
          function successCallback(response){
            addMoviesToList(response.data.Search);
            $scope.showMovies = true;
          },
          function errorCallback(response){
            $scope.errorMessage= 'Erreur serveur';
          })
    };

    function addMoviesToList(movies){
      $http({
          method: 'GET',
          url: 'https://crispesh.herokuapp.com/api/favs/me'
        }
      )
        .then(
          function successCallback(response) {
            angular.forEach(movies, function(movie, key){
              var isAlreadyAdded = false;
              angular.forEach(response.data, function(value, key) {
                if(value.movie_id === movie.imdbID){
                  isAlreadyAdded = true;
                }
              });
              $scope.movies.push({my: movie, isAdded: isAlreadyAdded});
            })
          },
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';
          }
        );
      return false;
    }
  });
