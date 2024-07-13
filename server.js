// Importa WebSockets
const WebSocket = require('ws');
// Llama al método server y le pasa el puerto
const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', ws => {
    ws.on('message', message => {
        const textMessage = message.toString(); // Convertir el buffer a cadena de texto
        console.log('Mensaje recibido del cliente Python:', textMessage);
        ws.send('Mensaje recibido exitosamente');
    });

    ws.send('Conexión establecida con el servidor WebSocket');
});

console.log('Servidor WebSocket escuchando en ws://localhost:8000');
