'use strict';

angular.module('tpApp')
  .controller('TPLogoutCtrl', function () {

    var isOk = false;
    var jwt = localStorage.getItem('JWT');
    var user = localStorage.getItem('USER');

    if(jwt !== null){
      localStorage.removeItem('JWT');
      isOk = true;
    }

    if(user !== null){
      localStorage.removeItem('USER');
      isOk = true;
    }

    if(isOk){
      location.href = "/main"
    }
  });
