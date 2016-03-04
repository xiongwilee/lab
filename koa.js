var koa = require('koa');
var app = koa();

// logger

app.use(function *(next){
  console.time('log');
  yield next;
  console.timeEnd('log');
});

// response

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);