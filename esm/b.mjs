import * as a from './a';

// 在模块中间调用其它模块的方法
a.foo('a');

export function bar (from) {
  a.foo(from);
}

