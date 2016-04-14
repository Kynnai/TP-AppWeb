'use strict';

angular.module('tpApp')
  .controller('ChatCtrl', function ($scope, mySocket) {

    $scope.user = localStorage.getItem('USER');
    $scope.formBody = '';

    $scope.chatMessages = [];
     var msg = {body: '',
                  username: '',
                  avatar: "",
                  textColor: ''};

    $scope.btnSend = function(){
      //msg.push({body:})
      msg.body = $scope.formBody;
      msg.username = $scope.user;
      msg.avatar = 'http://bridoz.com/wp-content/uploads/2015/09/275.jpg';
      msg.textColor = '#5a52ff';
      mySocket.emit('chat message', msg);
      $scope.formBody = '';
    };

    mySocket.on('chat message', function(message){
      $scope.chatMessages.push(message);
     /* console.log('Message received', msg);
      $("#messages ul").append('<li>'-msg-'</li>');*/
    })
  });
