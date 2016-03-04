'use strict';

var co = require('co');
var thunkify = require('thunkify');

var step_1 = thunkify(function (val, callback) {
	setTimeout(function(){
		callback(null, val + 1);
	},100)
})

var step_2 = thunkify(function (val, callback) {
	setTimeout(function(){
		callback(null, val + 1);
	},2000)
})

function* gen(x){
	console.log('x:',x);
	console.time('gen');

  var res = yield [
    step_1(1),
    step_2(2)
  ];
  	console.log(res);
  	console.timeEnd('gen');

  return z;
}

co(gen,1);