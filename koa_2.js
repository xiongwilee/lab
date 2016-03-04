var koa = require('koa');
var app = koa();


app.use(function *(next){
	this.set('test','test');

	yield next;
});

// response
app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);