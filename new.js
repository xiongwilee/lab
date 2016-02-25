var test = function () {
	this.test_1 = 'test_1';
}
test.prototype.test_2 = 'test_2';
test.prototype.test_3 = function(){
	return this.test_1;
}

var Test = new test();

console.log(Test.test_3());

// 模拟new
var Test_1 = new Object();
Test_1.__proto__ = test.prototype;

test.call(Test_1);

console.log(Test_1.test_3());