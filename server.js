'use strict'

const http = require('http');

var server = http.createServer( (req, res) => {
  var body = '';

  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added
  req.on('data', (chunk) => {
    body += chunk;
  });

  // the end event tells you that you have entire body
  req.on('end', () => {

    // write back something interesting to the user:
    res.write(Math.random().toString());
    res.end();
  });
});

server.listen(1337);