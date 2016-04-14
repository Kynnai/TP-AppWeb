'use strict';

angular.module('tpApp')
  .controller('ChatCtrl', function ($scope, mySocket) {

    $scope.chatMessages = [];
    $scope.msg = {body: null,
                  username: '',
                  Avatar: "",
                  textColor: '#EFFFFF'};

    $scope.btnSend = function(){
      mySocket.emit('chat message', $scope.msg.body);
      $scope.msg.body = '';
    };

    mySocket.on('chat message', function(message){
      $scope.chatMessages.push(message);
     /* console.log('Message received', msg);
      $("#messages ul").append('<li>'-msg-'</li>');*/
    })
  });
