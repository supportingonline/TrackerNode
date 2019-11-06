var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;



io.on('connection', function(socket){
  socket.on('drive', function(msg){
    io.emit('drive', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
