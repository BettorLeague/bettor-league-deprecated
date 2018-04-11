'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const config = {
  port: 8080
};

app.set('config', config);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


// For others case, create your own route with express
const apiFiles = fs.readdirSync('./server/api');
apiFiles.forEach(file => {
  require('./api/' + file)(app);
});

if (!module.parent) {
  // Allow the launcher to start the servers itself when run directly
  // `node server.js` case.
  start(app, config);

  // Handle graceful shutdown
  process.on('message', msg => {
    // We only handle shutdown messages
    if (msg !== 'shutdown') {
      return;
    }

    stop(server);
  });

} else {
  exports.app = app;
  exports.config = config;
  exports.start = start;
  exports.stop = stop;
}

function start (app, config) {
  return app.listen(config.port, () => {
    console.log('Listening on port '+config.port);
  });
}

function stop (server) {
  console.log('Server is going down... 1s before force shutdown.');
  server.close();

  setTimeout(() => {
    console.log('Forcing shutdown...');
    process.exit(0);
  }, 1000);
}
