const http = require('http')

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.write('~~~~~~~~~~~~0');
    res.end();
  }, 5000)
});

server.listen(3000);

process.on('SIGINT', function(msg) {
  server.getConnections((err, count) => {
    console.log(err, count, '~~~~~~~~0')
    if (count === 0) {
      process.exit(0);
    } else {
      server.close()
    }
  })
});
