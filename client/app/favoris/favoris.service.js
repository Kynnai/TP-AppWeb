'use strict';

var myApp = angular.module('tpApp');

myApp.service('Favoris', function ($resource) {
  var restAPIUrl = 'https://crispesh.herokuapp.com/api';
  return $resource(restAPIUrl + '/favs/:movie_id', { 'movie_id': '@favId' }, { update: { method: 'PUT' } });
});
//# sourceMappingURL=favoris.service.js.map
