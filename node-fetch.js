var extend = require('util')._extend(),
    http = require('http'),
    fetch = require('node-fetch');

http.createServer(function(req, res){
	fetch('http://static.bizfe.meilishuo.com/bbox/static/img/activities/banner-newyear.jpg?v=b3cfccafc6')
    .then(function(res) {
        return res;
    }).then(function(data){
        res.write('asdfasfd');
        res.end();
    });
}).listen(8000);