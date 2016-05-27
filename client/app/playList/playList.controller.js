'use strict';

angular.module('tpApp')
  .controller('TPPlayListCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.movies = [];
    $http({
        method: 'GET',
        url: 'https://appxapi.herokuapp.com/api/favs/me'
      }
    )
      .then(
        function successCallback(response) {
          findMovies(response.data);
        }
        ,
        function errorCallback(response) {
          $scope.errorMessage = 'Erreur serveur';
        }
      );

    function findMovies(movies){
      angular.forEach(movies, function(value, key){
        $http({ method: 'GET',
          url: 'https://www.omdbapi.com/?',
          params: {i: value.movie_id, type:'movie'},
          timeout: 5000
        })
        .then(
          function successCallback(response) {
            var isSeen = false;
            if(value.status === 0){
              isSeen = true;
            }
            if(response.data.Poster === 'N/A'){
              response.data.Poster = "http://www.reelviews.net/resources/img/default_poster.jpg";
            }
            $scope.movies.push({my: response.data, id: value.id, isSeen: isSeen, isAdded: true});
          }
          ,
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';
          }
        );

      });
    }

    $scope.btnDelete = function(movie){
      $http({
          method: 'DELETE',
          url: 'https://appxapi.herokuapp.com/api/favs/'+movie.id
        }
      )
        .then(
          function successCallback(response) {
            movie.isAdded = false;
          }
          ,
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';
          }
        );
    };

    function getOne(id){
      $http({
          method: 'GET',
          url: 'https://appxapi.herokuapp.com/api/favs/'+id,
        }
      )
        .then(
          function successCallback(response) {
          }
          ,
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';

          }
        );
    };

    $scope.btnPut = function(movie){
      $http({
          method: 'PUT',
          url: 'https://appxapi.herokuapp.com/api/favs/'+movie.id,
          data: {movie_id: movie.my.imdbID, status: 0}
        }
      )
        .then(
          function successCallback(response) {
            movie.isSeen = true;
          }
          ,
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';
          }
        );
    }
  }]);
