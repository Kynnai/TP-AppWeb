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
              url: 'https://appxapi.herokuapp.com/api/favs',
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
            if($scope.isConnected){
              addMoviesToList(response.data.Search);
            }
            else{
              angular.forEach(response.data.Search, function(value){
                if(value.Poster === 'N/A'){
                  value.Poster = "http://www.reelviews.net/resources/img/default_poster.jpg";
                }
                $scope.movies.push({my: value, isAdded: true});
              });
            }
            $scope.showMovies = true;
          },
          function errorCallback(response){
            $scope.errorMessage= 'Erreur serveur';
          })
    };

    function addMoviesToList(movies){
      $http({
          method: 'GET',
          url: 'https://appxapi.herokuapp.com/api/favs/me'
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
                console.log(movie.Poster);
                if(movie.Poster === 'N/A'){
                  movie.Poster = "http://www.reelviews.net/resources/img/default_poster.jpg";
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
