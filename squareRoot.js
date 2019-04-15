/**
 * 整数开方
 * @param {Number} i 需要开方的数字
 * @todo
 *  1. 如果是i为浮点型，可以先转为整型再调用该方法
 *  2. 递归体中可以做优化，不一定从0开始迭代
 * 
 * @return {Number|Boolean}
 */
module.exports = function squareRoot(i){
  // 首先判断是否为数字
  const isInt = Number.isInteger(i);
  if (!isInt) return false;

  // 如果是负数肯定不能被开方
  if (i < 0) return false;
  if (i == 0) return 0;

  return square(1)

  function square(j) {
    if (j*j > i) {
      return -1;
    } else if ( j*j === i){
      return j;
    } else {
      return square(++j);
    }
  }
}