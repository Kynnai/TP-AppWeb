'use strict';
angular.module('tpApp')
  .controller('TPMainCtrl', function ($scope, $http, Comments) {

    $scope.movies = {};
    $scope.errorMessage ='';
    $scope.allComments = Comments.query();
    $scope.movieFilter ='';

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

    $scope.deleteComment = function(id){
      Comments.delete(id);
    };

    $scope.updateComment = function(id){
      var comment = Comments.get({movie_id: id});
      comment.$update();
    }
  }});

//# sourceMappingURL=main.controller.js.map
