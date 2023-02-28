import http from 'http';
import { app } from './app.js';
import { dbConnect } from './db/db.connetc.js';
import createDebug from 'debug';
const debug = createDebug('w6');

const PORT = process.env.PORT || 4500;

const server = http.createServer(app);

dbConnect()
  .then((mongoose) => {
    server.listen(PORT);
    debug('DB:', mongoose.connection.db.databaseName);
  })
  .catch((error) => server.emit('error', error));

server.on('error', (error) => {
  console.error('Server error:', error.message);
});

server.on('debug', () => {
  debug('debug in http://localhost:' + PORT);
});
