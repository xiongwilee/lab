var http = require('http');
var request = require('request');

http.createServer(function (req, resp) {
  request.get('http://d05.res.meilishuo.net/img/_o/67/24/65bc4ebfe22d0c2eca1702c9736c_117_43.ch.png').pipe(resp)
}).listen(3000);