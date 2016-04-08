'use strict';
angular.module('tpApp')
  .controller('TPMainCtrl', function ($scope, $http, Comments) {

    $scope.user = localStorage.getItem('USER');

    $scope.movies = {};
    $scope.errorMessage ='';
    $scope.commentToAdd = { body: '',
                            movie_id:''};
    $scope.commentToUpdate = { body: '',
                                id:''};
    $scope.commentsForAMovie = [];

    $scope.showMovies = function(){
      $http({ method: 'GET',
              url: 'https://www.omdbapi.com/?',
              params: {s: 'the', type:'movie', y: 2016},
              timeout: 5000
             })
        .then(
          function successCallback(response){
            $scope.movies = response.data.Search;
            if($scope.user !== null){
              findComments($scope.movies);
            }
          }
          ,
          function errorCallback(response){
            console.log(response);
            $scope.errorMessage= 'Erreur serveur';
          });

     function findComments (movies){
       angular.forEach(movies, function(value, key){
          $http({ method: 'GET',
                  url:'http://crispesh.herokuapp.com/api/comments',
                  params: {movie_id:value.imdbID},
                  timeout:5000
          })
          .then(
            function successCallback(response){
              angular.forEach(response.data, function(value, key){
                $scope.commentsForAMovie.push({my: value, isAdded: true, date:value.date_created.substring(0,10), modif:false});
              })

            },
            function errorCallback(response){
              $scope.errorMessage = 'Erreur lors du chargement des commentaires'
            }
          )

       })
      }

    $scope.addComment = function(id){
      $scope.commentToAdd.movie_id = id;
      $http({ method: 'POST',
          url: 'https://crispesh.herokuapp.com/api/comments',
          data: { body: $scope.commentToAdd.body,
                  movie_id: $scope.commentToAdd.movie_id,
                  status: 0}
      }
      )
        .then(
          function successCallback(response){
            location.reload();
          }
          ,
          function errorCallback(response){
            console.log(response);
            $scope.errorMessage= "Erreur d'envoi du commentaire";
          }
        )
    };

    $scope.deleteCommentBtn = function(id){
      $http({
          method: 'DELETE',
          url: 'https://crispesh.herokuapp.com/api/comments/'+id
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
    };

    $scope.updateCommentBtn = function(id){
      $scope.commentToUpdate.id = id;
      $http({
          method: 'PUT',
          url: 'https://crispesh.herokuapp.com/api/comments/'+commentToUpdate.id,
          data: { movie_id: movie.my.imdbID,
                  body: $scope.commentToUpdate.body,
                  status: 0}
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

  }});

//# sourceMappingURL=main.controller.js.map
