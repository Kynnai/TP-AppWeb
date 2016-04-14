'use strict';

angular.module('tpApp')
  .controller('ChatCtrl', function ($scope, mySocket) {

    $scope.btnSend = function(){
      mySocket.emit('chat message', $scope.body);
      $scope.body = '';
    }

  });
