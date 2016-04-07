'use strict';

angular.module('tpApp', [
  'tpApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angular-jwt'
])
  .config(function($urlRouterProvider, $locationProvider, $httpProvider, jwtInterceptorProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    jwtInterceptorProvider.tokenGetter = function (config, jwtHelper) {

      if (config.url.substr(config.url.length - 5) === '.html' ||
        config.url.indexOf('/api/') === -1
      ) {
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
    };

    $httpProvider.interceptors.push('jwtInterceptor');

  })
  .factory('jwtInterceptor', function($rootScope, $q, $cookies, $location, jwt){
    return {
      response: function (response) {
        if (response.config.url.indexOf("http://crispesh.herokuapp.com/api/login_check") === 0 && response.data.token) {
          jwt.saveToken(response.data.token, response.data.data.username)
        }
        return response;
      },

      request: function (configuration) {
        var token = jwt.getToken();
        if (configuration.url.indexOf("http://crispesh.herokuapp.com/api/favs") === 0 && token) {
          configuration.headers.Autorization = 'Bearer ' + token;
        }
        else if (configuration.url.indexOf("http://crispesh.herokuapp.com/api/comments") === 0 && token) {
          configuration.headers.Autorization = 'Bearer ' + token;
        }
        return configuration;
      }
    }
  });
