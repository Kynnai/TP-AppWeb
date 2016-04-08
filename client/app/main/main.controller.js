'use strict';
angular.module('tpApp')
  .controller('TPMainCtrl', function ($scope, $http, Comments) {

    $scope.movies = {};
    $scope.errorMessage ='';
    $scope.movieFilter ='';
    $scope.comment = '';

    $scope.showMovies = function(){
      $http({ method: 'GET',
              url: 'https://www.omdbapi.com/?',
              params: {s: 'the', type:'movie', y: 2016},
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
          });

      $scope.showComments = function(){
        
      };


    $scope.addComment = function(id){
      $http({ method: 'POST',
          url: 'https://crispesh.herokuapp.com/api/comments',
          data: { body: $scope.comment,
                  movie_id: id,
                  status: 0}
      }
      )
        .then(
          function successCallback(response){
            $scope.isAdded = true;
            console.log(response);
            //location.reload();
          }
          ,
          function errorCallback(response){
            console.log(response);
            $scope.errorMessage= 'Erreur serveur';
          }
        )
    };

    $scope.deleteComment = function(id){
      $http({
          method: 'DELETE',
          url: 'https://crispesh.herokuapp.com/api/comments/'+id
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

    $scope.updateComment = function(id){
      var comment = Comments.get({movie_id: id});
      comment.
      comment.$update();
    }
  }});

//# sourceMappingURL=main.controller.js.map
