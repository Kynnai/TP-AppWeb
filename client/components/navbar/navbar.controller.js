'use strict';

//class NavbarController {
angular.module('tpApp')
  .controller('NavbarController', function ($scope, $http, $rootScope) {
  //start-non-standard
    var jwt = localStorage.getItem('JWT');
    if(jwt === null)
    {
      $scope.menu = [{
        'title': 'Accueil',
        'state': 'main'
      },
        {
          'title': 'Recherche',
          'state': 'search'
        },
        {
          'title': 'Contact',
          'state': 'about'
        },
        {
          'title': 'Inscription',
          'state': 'registration'
        },
        {
          'title': 'Connexion',
          'state': 'login'
        },
      ];
    }
    else{
      $scope.menu = [{
        'title': 'Accueil',
        'state': 'main'
      },
        {
          'title': 'Recherche',
          'state': 'search'
        },
        {
          'title': 'Liste de Film',
          'state': 'playList'
        },
        {
          'title': 'Contact',
          'state': 'about'
        },
        {
          'title': $rootScope.username,
          'state': 'login'
        },
        {
          'title': 'Déconnexion',
          'state': 'main'
        },
      ];
    }

   /* $scope.logout = function(){
      $rootScope.$broadcast('user:logout', {});
      localstorage.removeItem('JWT');
    }*/

  $scope.isCollapsed = true;
  //end-non-standard

  /*constructor() {
    }*/
});

//angular.module('tpApp')
  //.controller('NavbarController', NavbarController);
