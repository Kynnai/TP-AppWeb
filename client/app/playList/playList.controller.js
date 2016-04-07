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
          console.log(response.data);
        }
        ,
        function errorCallback(response) {
          console.log(response);
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
            $scope.movies.push({my: response.data});
            console.log(response.data.Title);
          }
          ,
          function errorCallback(response) {
            console.log(response);
            $scope.errorMessage = 'Erreur serveur';
          }
        );

      });
    }

    $scope.deleteFav = function(favId){
      Favoris.delete(favId);
    };

    $scope.btnPut = function(favId){
      var favToUpdate = Favoris.get({id: favId});
      favToUpdate.status = 1;
      Favoris.$update();
    };
  });
