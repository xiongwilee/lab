'use strict';

var koa = require('koa');
var app = koa();
var thunkify = require('thunkify');

var step_1 = thunkify(function (val, callback) {
	setTimeout(function(){
		callback(null, val + 1);
	},1000)
})

var step_2 = thunkify(function (val, callback) {
	setTimeout(function(){
		callback(null, val + 1);
	},2000)
})

// logger

app.use(function *(next){
  console.time('log');
  yield next;
  console.timeEnd('log');
});

// response

app.use(function *(){
  var y = yield step_1(1);
  var z = yield step_2(y);

  this.body = z;
});

app.listen(3000);