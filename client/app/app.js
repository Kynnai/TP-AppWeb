'use strict';

angular.module('tpApp', [
    'tpApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'angular-jwt',
    'btford.socket-io'
  ])
  .factory('mySocket', ['socketFactory', function (socketFactory) {
    var myIoSocket = io.connect('http://atomracechat.herokuapp.com/');
    var mySocket = socketFactory({
      ioSocket: myIoSocket
    });
    return mySocket;
  }])
  .config(['$urlRouterProvider', '$locationProvider', '$httpProvider', 'jwtInterceptorProvider', function($urlRouterProvider, $locationProvider, $httpProvider, jwtInterceptorProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    jwtInterceptorProvider.tokenGetter = ['config', 'jwtHelper', function (config, jwtHelper) {

      if (config.url.substr(config.url.length - 5) === '.html' || config.url.indexOf('/api/') === -1) {
        return null;
      }

      var jwt = localStorage.getItem('JWT');
      if (jwt === null) {
        return null;
      }

      if (jwtHelper.isTokenExpired(jwt)) {
        console.log("Token Expired !", jwtHelper.getTokenExpirationDate(jwt));
      }
      else {
        console.log("Token not expired", jwtHelper.getTokenExpirationDate(jwt));
        return jwt;
      }
    }];
    $httpProvider.interceptors.push('jwtInterceptor');
  }]);
