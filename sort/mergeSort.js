/**
 * 合并排序
 * @param  {Array} arr [description]
 * @return {Array}     [description]
 */
function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const [leftArr, rightArr] = splitToTwoEuqalArrays(arr);

  const newLeftArr = mergeSort(leftArr);
  const newRightArr = mergeSort(rightArr);

  return merge(newLeftArr, newRightArr);

  /**
   * 合并两个数组
   * @param  {Array} left  [description]
   * @param  {Array} right [description]
   * @return {Array}       [description]
   */
  function merge(left, right) {
    let result = [];


    let leftFirst, rightFirst;
    while (true) {
      // left 和 right 长度都为空，则直接返回
      if (left.length === 0 && right.length === 0) {
        break;
      }

      // left 和 right 长度任何一个为空，另外一个直接补充到result队列中
      if (left.length > 0 && right.length === 0) {
        result = result.concat(left);
        break;
      }
      if (right.length > 0 && left.length === 0) {
        result = result.concat(right);
        break;
      }

      leftFirst = left.shift();
      rightFirst = right.shift();

      if (leftFirst === rightFirst) {
        result.push(leftFirst);
        result.push(rightFirst);
      } else if (leftFirst < rightFirst) {
        result.push(leftFirst);
        right.unshift(rightFirst)
      } else {
        result.push(rightFirst);
        left.unshift(leftFirst)
      }
    }

    return result;
  }

  /**
   * 将数组拆分为两个相同长度的数组
   * @param  {Array} arr [description]
   * @return {Array}     [description]
   */
  function splitToTwoEuqalArrays(arr) {
    const halfIndex = Math.ceil(arr.length / 2);

    const rightArr = arr.splice(halfIndex);
    return [arr, rightArr];
  }
}