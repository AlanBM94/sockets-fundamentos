
var socket = io();
socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Perdimos conexión con el servidor');
});

// Envía información
socket.emit('enviarMensaje', {
    usuario: 'Alan',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Respuesta del servidor: ', resp);
})

// Recibe información
socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});
