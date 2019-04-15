/**
 * 整数开方
 * @param {Number} i 需要开方的数字
 * @todo
 *  1. 如果是i为浮点型，可以先转为整型再调用该方法
 *  2. 其中一个结束判断：if (right - left === 1) return -1; 有待优化
 * @return {Number|Boolean}
 */
module.exports = function squareRoot(i){
  // 首先判断是否为整型数字
  const isInt = Number.isInteger(i);
  if (!isInt) return false;

  // 如果是负数肯定不能被开方
  if (i < 0) return false;
  if (i < 2) return i;

  // 设置flag
  let left = 1;
  let right = Math.ceil(i/2);

  return square();

  function square() {
    if (left === right || left > right) return -1;

    const center = Math.ceil((left + right)/2);
    const centerSqure = center * center;

    if (centerSqure === i) return center;
    if (right - left === 1) return -1;

    if (centerSqure < i) {
      left = center;
    } else {
      right = center;
    }

    return square();
  }
}
