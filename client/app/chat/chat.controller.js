'use strict';
angular.module('tpApp')
  .controller('TPChatCtrl', ['$scope', 'mySocket', function ($scope, mySocket) {

    $scope.user = localStorage.getItem('USER');
    $scope.formBody = null;

    $scope.chatMessages = [];
    $scope.msg = {body: '', username: '', avatar: "",textColor: ''};

    $scope.btnSend = function(){
      $scope.msg = {body: $scope.formBody, username: $scope.user, avatar: 'http://bridoz.com/wp-content/uploads/2015/09/275.jpg',textColor: document.chatForm.color.value};
      mySocket.emit('chat message', $scope.msg);
      $scope.formBody = '';
    };

    mySocket.on('chat message', function(message){
      if(message.avatar == null){
        message.avatar = 'https://u.o0bc.com/avatars/no-user-image.gif'
      }
      $scope.chatMessages.push(message);
    })
  }]);
