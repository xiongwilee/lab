var arr =  [['A1', 'A2', 'A3', 'A4'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3', 'C4']];


/**
 * 二维数组交叉组合分组算法实现
 * 
 * @param {Array} arr 
 */
function determinant(arr){
  const result = [];

  const totalLength = arr.length;
  const currentFlag = new Array(totalLength).fill(0)

  getItems(0);

  return result;

  function getItems(curIndex){
    const nextIndex = curIndex + 1;

    if (curIndex === totalLength) {
      result.push(currentFlag.reduce((sum, item, index)=>{
        sum.push(arr[index][item]);
        return sum;
      }, []));
    }

    if (nextIndex > totalLength) return;

    for (let i = 0; i < arr[curIndex].length; i++){
      currentFlag[curIndex] = i;
      getItems(nextIndex);
    }

  }
}

determinant(arr);