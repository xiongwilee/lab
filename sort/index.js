/**
 * 插入排序
 * @param  {Array} arr [description]
 * @return {Array}     [description]
 */
function insertSort(arr) {
  const result = [];

  arr.forEach(item => {
    const curIndex = getMiddleIndex(result, item);
    result.splice(curIndex, 0, item);
    console.log(curIndex, item, result);
  });

  return result;

  /**
   * 获取需要插入的item,在arr中的位置
   * @param  {Array} arr  [description]
   * @param  {Number} item [description]
   * @return {Number}      [description]
   */
  function getMiddleIndex(arr, item) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
      const curVal = arr[i];
      const nextVal = arr[i + 1];

      if (item <= curVal) {
        return i;
      } else if (nextVal === undefined) {
        return i + 1;
      } else if (item > curVal && nextVal > item) {
        return i + 1;
      } else {
        continue;
      }
    }

    return index;
  }
}

/**
 * 冒泡排序
 * @param  {Array} arr [description]
 * @return {Array}     [description]
 */
function bubbleSort(arr) {
  const length = arr.length;

  if (arr.length === 1) return arr;

  return arr.reduce((pre, cur, index, array) => {
    // 获取上一次排序后的结果，
    // BTW: 这里的array需要与arr保持隔离，通过slice方法复制一个
    const result = typeof pre === 'object' ? pre : array.slice(0);

    // 一轮冒泡排序前的数组
    const beforeArr = result.splice(0, length - index + 1);
    // 一轮冒泡排序后的数组
    const afterArr = beforeArr.reduce((subPre, subCur, subIndex, subArray) => {
      const preVal = subArray[subIndex - 1];
      const curVal = subArray[subIndex];

      if (preVal > curVal) {
        subArray[subIndex - 1] = curVal;
        subArray[subIndex] = preVal;
      }

      return subArray;
    });

    return afterArr.concat(result);
  })
}

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

      // 否则，取更小的第一个参数给result
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

/**
 * 快速排序
 * @param  {Array} arr [description]
 * @return {Array}     [description]
 */
function quickSory(arr) {
  if (arr.length <= 1) return arr;

  // 取第一个值为比较参数
  let defaultValue = arr[0];

  let curIndex = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > defaultValue) {
      continue;
    } else {
      let curIndexValue = arr[curIndex];
      arr[curIndex] = arr[i];
      arr[i] = curIndexValue;
      curIndex++;
    }
  }

  // 把比较参数放到正确的位置
  arr[0] = arr[curIndex - 1];
  arr[curIndex - 1] = defaultValue;

  const leftArr = quickSory(arr.slice(0, curIndex - 1));
  const rightArr = quickSory(arr.slice(curIndex));

  return leftArr.concat([defaultValue], rightArr);
}

let length = 1000;
let array = Array.apply(null, {length: length}).map(item => Math.floor(Math.random() * 1000));

quickSory(array);