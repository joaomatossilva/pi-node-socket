var socket = require('socket.io-client')('http://localhost:3000');
  socket.on('connect', function(){
      console.log('connect');
  });
  socket.on('event', function(data){});
  socket.on('my other event', function(data){
      console.log(data);
  });
  socket.on('news', function(data){
      console.log(data);
  });
  socket.on('oi', function(data){
      console.log(data);
  });
  socket.on('disconnect', function(){
      console.log('disconnect');
  });