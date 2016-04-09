'use strict';

var myApp = angular.module('tpApp');

myApp.service('Favoris', function ($resource) {
  var restAPIUrl = 'https://crispesh.herokuapp.com/api/favs';
  return $resource(restAPIUrl + '/:id', { 'id': '@id' }, { update: { method: 'PUT' } });
});
//# sourceMappingURL=favoris.service.js.map
