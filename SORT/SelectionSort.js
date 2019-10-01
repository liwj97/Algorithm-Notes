function SelectionSort(array) {
    let length = array.length;

    for (let j=0 ; j<length-1 ; j++) {  // 外层循环，从零开始取数据
        let min = j;
        for (let i=min+1 ; i<length ; i++) {  // 从j+1开始，和后面的数据进行比较
            if(array[min] > array[i]) {
                min = i;
            }
        }
        let temp = array[min];
        array[min] = array[j];
        array[j] = temp;
    }
    return array;
}
let arr = [1,5,4,3,7];
console.log(SelectionSort(arr));    // [1,3,4,5,7]
