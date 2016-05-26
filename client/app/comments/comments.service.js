'use strict';

var commentService = angular.module('tpApp');

commentService.service('Comments', function ($resource) {
  var restAPIUrl = 'https://appxapi.herokuapp.com/api';
  return $resource(restAPIUrl + '/comments/:movie_id', { 'movie_id': '@movieId' }, { update: { method: 'PUT' } });
});
