const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: '*' } });

io.on('connection', (socket) => {

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(data[1] + ' Joined Room: ' + data[0]);
  });

  socket.on('disconnect', () => {
    console.log('USER DISCONNECTED');
  });

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data.content);
  });
});

http.listen(4000, () => {
  console.log('server start on port 4000');
});
