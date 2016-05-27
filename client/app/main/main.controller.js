'use strict';
angular.module('tpApp')
  .controller('TPMainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.user = localStorage.getItem('USER');

    $scope.movies = {};
    $scope.errorMessage ='';
    $scope.commentToAdd = { body: '',
                            movie_id:''};
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
            $scope.errorMessage= 'Erreur serveur';
          });

     function findComments (movies){
       angular.forEach(movies, function(value, key){
          $http({ method: 'GET',
                  url:'http://appxapi.herokuapp.com/api/comments',
                  params: {movie_id:value.imdbID},
                  timeout:5000
          })
          .then(
            function successCallback(response){
              angular.forEach(response.data, function(value, key){
                $scope.commentsForAMovie.push({my: value, isAdded: true, modif:false});
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
          url: 'https://appxapi.herokuapp.com/api/comments',
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
            $scope.errorMessage= "Erreur d'envoi du commentaire";
          }
        )
    };

    $scope.deleteCommentBtn = function(id){
      $http({
          method: 'DELETE',
          url: 'https://appxapi.herokuapp.com/api/comments/'+id
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

    $scope.updateCommentBtn = function(commentId, movieId, comment){

      var commentToUpdate = {body: comment.my.body,
                                id: commentId,
                                movie_id:movieId};
      $http({
          method: 'PUT',
          url: 'https://appxapi.herokuapp.com/api/comments/'+commentToUpdate.id,
          data: { movie_id: commentToUpdate.movie_id,
                  body: commentToUpdate.body,
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

  }}]);

//# sourceMappingURL=main.controller.js.map
