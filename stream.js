'use strict'

const http = require('http');

var server = http.createServer( (req, res) => {
  // req is an http.IncomingMessage, which is a Readable Stream
  // res is an http.ServerResponse, which is a Writable Stream

  var body = '';
  // we want to get the data as utf8 strings
  // If you don't set an encoding, then you'll get Buffer objects
  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added
  req.on('data', (chunk) => {
    body += chunk;
  });

  // the end event tells you that you have entire body
  req.on('end', () => {
    try {
      var data = JSON.parse(body);
    } catch (er) {
      // uh oh!  bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }

    // write back something interesting to the user:
    res.write(JSON.stringify(data));
    res.end();
  });
});

server.listen(1337);