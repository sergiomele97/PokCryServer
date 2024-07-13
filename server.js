const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('Mensaje recibido del cliente Python:', message);
        ws.send('Mensaje recibido exitosamente');
    });

    ws.send('Conexión establecida con el servidor WebSocket');
});

console.log('Servidor WebSocket escuchando en ws://localhost:8080');
