var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
// httpProxy.createProxyServer({target:'http://static.bizfe.meilishuo.com/bbox/static/img/activities/banner-newyear.jpg?v=b3cfccafc6'}).listen(8000); // See (†)

var proxy = httpProxy.createProxyServer({
	ignorePath: true,   // 是否忽略当前请求的path
	changeOrigin: true, // 是否修改host
	autoRewrite: true   // 是否重写本地的host/端口 
});
 
function proxyMiddleware(req, res) {
	// 在数据发送前的回调函数，可以用来修改请求头信息，用以的普通请求
	proxy.on('proxyReq', function(proxyReq, req, res, options) {
	  proxyReq.setHeader('X-Special-Proxy-Header', 'testtest');
	});
	// 在数据发送前的回调函数，可以用来修改请求头信息，用以WebSocket
	proxy.on('proxyReqWs', function(proxyReq, req, res, options) {
	  proxyReq.setHeader('X-Special-Proxy-Header', 'WebSocket');
	});
    proxy.web(req, res,{
	  target: 'http://test.mlsfe.biz/static/image/bg_6_s.jpg'
	});
}
http.createServer(proxyMiddleware).listen(8000)

/*http.createServer(function(req, res){
	console.log(req);
	res.write('test');
	res.end();
}).listen(8001)*/