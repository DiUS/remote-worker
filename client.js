var connect = require('connect');
var http = require('http');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(connect.directory('public'))
  .use(function (req, res) {
    res.end('Hello from Connect!\n');
  });

http.createServer(app).listen(3000);