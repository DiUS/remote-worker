var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = new PeerServer({
  port: 9000,
  path: '/',
  ssl: {
    key: fs.readFileSync('./ssl/server.key'),
    certificate: fs.readFileSync('./ssl/server.crt')
  }
});

server.on('connection', function (id) {
  console.log('id is: ' + id);
});

