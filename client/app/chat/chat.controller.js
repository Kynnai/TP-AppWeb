'use strict';

angular.module('tpApp')
  .controller('ChatCtrl', function ($scope, mySocket) {

    $scope.chatMessages = [];

    $scope.btnSend = function(){
      mySocket.emit('chat message', $scope.body);
      $scope.body = '';
    };

    mySocket.on('chat message', function(message){
      $scope.chatMessages.push(message);
    })
  });
