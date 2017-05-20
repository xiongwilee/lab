const http = require('http')

const server = http.createServer((req, res) => {
  res.write('~~~~~~~~~~~~0');
  setTimeout(() => {
    console.log('~~~~~~~~~~~~5')
    res.end();
  }, 5000)
});

process.on('SIGINT', function() {
  console.log('~~~~~~~~~~~~2')
  server.close(() => {
    setTimeout(() => {
      console.log('~~~~~~~~~~~~4')
    }, 2000)
    console.log('~~~~~~~~~~~~3')
    process.exit(0);
  });
});

setTimeout(() => {
  console.log('~~~~~~~~~~~~1')
  process.kill(0, 'SIGINT')
}, 2000)

server.listen(3000);
