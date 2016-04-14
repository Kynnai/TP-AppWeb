'use strict';

//class NavbarController {
angular.module('tpApp')
  .controller('NavbarController', function ($scope, $http, $rootScope, $location) {
  //start-non-standard
    var jwt = localStorage.getItem('JWT');
    var user = localStorage.getItem('USER');

    $scope.username = $rootScope.username;

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
        }
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
          'title': 'Tchat',
          'state': 'chat'
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
          'title': user,
          'state': null
        },
        {
          'title': 'Déconnexion',
          'state': 'logout'
        }
      ];
    }

    function logout(){
      localStorage.removeItem('JWT');
      location.href="/main"
    };

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
