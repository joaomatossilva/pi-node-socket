var socket = require('socket.io-client')('https://polar-mountain-46105.herokuapp.com/');
var GPIO = require('onoff').Gpio,
    led = new GPIO(18, 'out');
    
socket.on('connect', function(){
    console.log('connect');
});
 
socket.on('pushState', function(data){
    console.log('pushState');
    console.log(data);
    led.writeSync(parseInt(data.state));
    intervalId = setTimeout( function(){
        led.writeSync(0);
    }, 3000);
});
 
socket.on('disconnect', function(){
    console.log('disconnect');
});