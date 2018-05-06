const http = require("http");
const server = http.createServer();

server.on("request",function(req,res){
    setInterval(()=>{
    	const str = `testtset ${Math.random()}`;
    	res.end(str);
    	console.log(str);
    },2000)
});

server.listen(8888);