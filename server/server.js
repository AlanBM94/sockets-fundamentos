const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const socketIO = require('socket.io');

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
// Middleware para que se muestre la carpeta public
app.use(express.static(publicPath));

// IO esta es la comunicación del backend
module.exports.io = socketIO(server);

require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});