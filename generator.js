'use strict';

function* gen(x){
  var y = yield x + 1;
  return y;
}

var g = gen(1); // g返回一个遍历器，不会直接返回执行结果

console.log(g.next()); // { value: 2, done: false }

console.log(g.next()); // { value: undefined, done: true }

/*function* gen(x){
  	console.log('x:',x);

  var y = yield x + 1;
  	console.log('y:',y);

  var z = yield y + 1;
  	console.log('z:',z);

  return z;
}

var g = gen(1);

var step_1 = g.next(); // { value: 2, done: false }
var step_2 = g.next(step_1.value); // { value: 3, done: false }
var step_3 = g.next(step_2.value); // { value: undefined, done: true }*/