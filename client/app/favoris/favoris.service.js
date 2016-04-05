'use strict';

var myApp = angular.module('tpApp');

myApp.service('Favoris', function($resource){
    var restAPIUrl = 'http://crispesh.herokuapp.com/api';
    return $resource(restAPIUrl + '/api/favs/:id', {id: '@id'}, {update: {method: 'PUT'}})
});