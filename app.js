var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
console.log(11111)
if (cluster.isMaster) {
    console.log("master start...");

    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        console.log(i)
        cluster.fork();
    }

    cluster.on('listening',function(worker,address){
        console.log('listening: worker ' + worker.process.pid +', Address: '+address.address+":"+address.port);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n");
        console.log(cluster.worker.id)
    }).listen(8090);
}