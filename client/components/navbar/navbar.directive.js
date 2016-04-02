'use strict';
angular.module('tpApp')
  .directive('navbar', function(){
    return{
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E',
      controller: 'NavbarController',
      controllerAs: 'nav'
    }
  });
