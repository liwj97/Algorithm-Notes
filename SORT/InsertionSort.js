function InsertionSort(arr) {
  let length = arr.length;
  // 1. 外层循环：从第1个位置开始获取数据，向前面局部有序进行插入
  for(let i=1 ; i<length ; i++){
      let temp = arr[i];
      let j = i;
      // 2. 内层循环：获取i位置的元素，和前面的数据依次进行比较
      while (arr[j-1] > temp && j > 0) {
          arr[j] = arr[j-1];
          j--;
      }
     // 3. 将j位置数据，放置temp即可
     arr[j] = temp;
  }
  return arr;
}
let array = [1,3,5,7,2,4,6];
console.log(InsertionSort(array));