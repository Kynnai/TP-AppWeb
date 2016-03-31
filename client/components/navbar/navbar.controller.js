'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
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
      'title': 'Inscription',
      'state': 'registration'
    },
    {
      'title': 'Connexion',
      'state': 'login'
    },
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('tp1App')
  .controller('NavbarController', NavbarController);
