import * as b from './b';

b.bar('b');

export function foo (from) {
  console.log('caller: ' + from);
}
