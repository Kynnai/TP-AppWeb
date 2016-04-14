'use strict';
angular.module('tpApp')
  .controller('TPChatCtrl', function ($scope, mySocket) {

    $scope.user = localStorage.getItem('USER');
    $scope.formBody = null;

    $scope.chatMessages = [];
    $scope.msg = {body: '', username: '', avatar: "",textColor: ''};

    $scope.btnSend = function(){
      $scope.msg = {body: $scope.formBody, username: $scope.user, avatar: 'http://bridoz.com/wp-content/uploads/2015/09/275.jpg',textColor: '#5a52ff'};
      mySocket.emit('chat message', $scope.msg);
      $scope.formBody = '';
    };

    mySocket.on('chat message', function(message){
      $scope.chatMessages.push(message);
    })
  });
