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
    'title': 'Inscription',
    'state': 'registration'
  },
  {
    'title': 'Contact',
    'state': 'about'
  },
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('tp1App')
  .controller('NavbarController', NavbarController);
