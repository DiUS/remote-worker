var Peer = require('./node_modules/peerjs/dist/peer');

console.log(Peer);

var client = Peer('tarcio', {
  host: 'raspberrypi-tarcio',
  port: 9000,
  secure: true,
  path: '/',
  debug: 3
});

var conn = client.connect('andy');
conn.on('open', function () {
  conn.send('hi!');
});

conn.on('connection', function (conn) {
  conn.on('data', function (data) {
    // Will print 'hi!'
    console.log(data);
  });
});