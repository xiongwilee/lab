var timer = function(val, callback) {
	setTimeout(function() {
		callback(val + 'test')
	}, 1000)
}

var thunkify = function(fun) {
	return function() {
		var me = this;
		var args = new Array(arguments.length);

	    for(var i = 0; i < args.length; ++i) {
	      args[i] = arguments[i];
	    }
	    
		return function(cbk) {
			args.push(cbk);
			fun.apply(me, args)
		}
	}
}

var _timer = thunkify(timer);

_timer('aaaaa')(function(res) {
	console.log(res);
})