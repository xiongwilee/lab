'use strict';

var co = require('co');
var thunkify = require('thunkify');
var test = function (val, callback) {
	setTimeout(function(){
		console.log(val,0);
		callback && callback(null, val + 'testvalue');
	},1000)
}
var _test = thunkify(test);

// with thunkify
var _testFun = function* (){
	let val = yield _test('test');

	console.log(val,1);
}

// without thunkify
var testFun = function* (){
	let val = yield test('test');

	console.log(val,2);
}

co(_testFun);

co(testFun);