'use strict';

angular.module('tpApp')
  .controller('PlayListCtrl', function ($scope, $resource, $http, Favoris) {

      $scope.favorites = {};
      $scope.messageServeur = '';

      $scope.getAllFav = function(){
          $http({
              method: 'GET',
              url: 'http://crispesh.herokuapp.com/api/me',
              timeout: 5000
          })
              .then(
                  function successCallback(response){
                      console.log(Hello);
                      $scope.favorites = response.data.Search;
                  }
              ),
              function errorCallback(response) {
                  console.log(allo);
                  $scope.messageServeur = 'Erreur Serveur';
              }
      }

      $scope.favDelete = function(){
          Favoris.delete({})
      }
  });