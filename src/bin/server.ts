import * as Express from 'express';
import * as HTTP from 'http';
import * as SocketIO from 'socket.io';

const app = Express();
const http = HTTP.createServer(app);
const io = SocketIO(http);

io.on('connection', (socket) => {
  console.log('user connected');
});
