

let selectSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        // 左半部分已排好。从右半部分找到最小的，交换到两部分的边界处
        let min = i;
        for (let j = i; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }
    return arr;
}
console.log(selectSort([4,2,6,1,7,3,8,0,9,5]))