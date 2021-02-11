const http = require('https');

const express = require('express');

const app = express();


app.use(express.static(`${__dirname}/../scripts`));


const server = http.createServer(app);
const socketio = require('socket.io').listen(server);
const io = socketio(server);



io.on('connection', (sock) =>{
   sock.emit('message', 'You are connected');

   sock.on('message', (text) => io.emit('message', text));
});

server.on('error', (err) => {
    console.error(err);
})

http.listen(5500, "127.0.0.1");
server.listen(5500);