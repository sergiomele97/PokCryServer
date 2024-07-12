// Importa express
const express = require('express')
// Genera una instancia de express
const app = express()
//Importa http y llama al método server pasando la app express como argumento. Crea un servidor http que usa la app.
const http = require('http').Server(app) 
// Importa modulo socket.io y crea una instancia (llama al constructor) pasando el servidor http como argumento.
// Permite a Socket.IO interceptar y manejar las conexiones WebSocket en el mismo puerto y dominio que el servidor HTTP.
const io = require('socket.io')(http)

// Puerto definido como variable de entorno o 8000 si no esta definido
const port = process.env.PORT || 8000


// Devuelve el archivo index.html en el directorio raiz cuando se hace request a la raiz del dominio
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => { 
  console.log('Client connected') 
  socket.on('disconnect', () => { 
    console.log('Client disconnected') 
  }) 
  socket.on('message', (msg) => { 
    io.emit('message', msg) 
  }) 
})

// Comienza a escuchar en el puerto y ejecuta la función dentro

http.listen(port, () => { 
console.log(`App listening on port ${port}`)
})
