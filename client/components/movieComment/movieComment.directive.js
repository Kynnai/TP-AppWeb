'use strict';

angular.module('tpApp')
  .directive('movieComment', function ($http) {
    return {
      templateUrl: 'components/movieComment/movieComment.html',
      restrict: 'E',
      scope: {
        omdbid: '=omdbid'
      },
      link: function (scope, element, attrs) {
        scope.$watch('omdbid', function(value) {
          if (value !== undefined) {
            $http({
              method: 'GET',
              url: 'https://crispesh.herokuapp.com/api/comments?movie_id=' + value,
              timeout: 5000,
            })
              .then(
                function successCallback(response) {
                  scope.movie_comments = response.data;
                },
                function errorCallback(response) {
                  console.log('Error loading comments');
                }
              );
          }
        })
      }
    };
  });

