'use strict';

angular.module('tpApp')
  .controller('TPPlayListCtrl', function ($scope, $http, Favoris) {
    $scope.movies = [];
    $http({
        method: 'GET',
        url: 'https://crispesh.herokuapp.com/api/favs/me'
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
            $scope.movies.push({my: response.data, id: value.id, isSeen: isSeen});
            console.log(value.status);
            console.log(isSeen);
          }
          ,
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';
          }
        );

      });
    }

    $scope.btnDelete = function(favId){
      $http({
          method: 'DELETE',
          url: 'https://crispesh.herokuapp.com/api/favs/'+favId,
        }
      )
        .then(
          function successCallback(response) {
            console.log(response);
            location.reload();
          }
          ,
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';
            console.log(response);
          }
        );
    };

    function getOne(id){
      $http({
          method: 'GET',
          url: 'https://crispesh.herokuapp.com/api/favs/'+id,
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
          url: 'https://crispesh.herokuapp.com/api/favs/'+movie.id,
          data: {movie_id: movie.my.imdbID, status: 0}
        }
      )
        .then(
          function successCallback(response) {
            location.reload();
          }
          ,
          function errorCallback(response) {
            $scope.errorMessage = 'Erreur serveur';
          }
        );
    }
  });
