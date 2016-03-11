var socket = require('socket.io-client')('https://polar-mountain-46105.herokuapp.com/');
    
socket.on('connect', function(){
    console.log('connect');
});
 
socket.on('pushState', function(data){
    console.log('pushState');
    console.log(data);
});
 
socket.on('disconnect', function(){
    console.log('disconnect');
});