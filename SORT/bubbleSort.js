function BubbleSort(array) {
    let length = array.length;
    // 第一次 j=length-1 , 比较到倒数第一个位置
    // 第二次 j=length-2 , 比较到倒数第二个位置
    // ...
    for (let j=length-1 ; j>=0 ; j--) {

        //  第一次进入循环：i=0, 第一个和第二个元素比较
        // 最后一次进入循环：i=length-2, 第 length-2 个第 length-1 个元素比较
        for (let i=0 ; i<j ; i++) {
            if(array[i] > array[i+1]) {      
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
    }
    return array;
    
}
let arr = [1,5,4,3,7]
console.log(BubbleSort(arr));       // [1,3,4,5,7]
