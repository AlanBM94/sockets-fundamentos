const {io} = require('../server');
// Manda un alerta de que un usuario se conectó
io.on('connection', (client) => {

    console.log(`Un usuario se ha conectado`);

    client.on('disconnect', () => {
        console.log('El usuario se ha desconectado');
    });

    // Recibe el mensaje del cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if(mensaje.usuario){
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // }else{
        //     callback({
        //         resp: 'Todo salió mal!!!!'
        //     });

        // }
    });

    client.emit('mensajeServidor', {
        usuario: 'Servidor',
        mensaje: 'Has ingresado a esta aplicación.'
    })
});