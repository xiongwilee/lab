'use strict'

const http = require('http');

var server = http.createServer( (req, res) => {
    // write back something interesting to the user:
    res.write(Math.random().toString());
    res.end();
});

server.listen(1337, '');
