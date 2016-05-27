'use strict';

var myApp = angular.module('tpApp');

myApp.service('Favoris', ['$resource', function ($resource) {
  var restAPIUrl = 'https://appxapi.herokuapp.com/api/favs';
  return $resource(restAPIUrl + '/:id', { 'id': '@id' }, { update: { method: 'PUT' } });
}]);
//# sourceMappingURL=favoris.service.js.map
