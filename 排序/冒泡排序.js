// 原理：比较两个相邻的元素，将值大的元素交换到右边

let bubble = (arr) => {
    if(!arr.length || arr.length === 1) return arr;

    // 排N趟, n个数只需排n-1趟
    for(let i = 1; i <= arr.length - 1; i++){
        for(let j = 1; j <= arr.length - i; j++){
            if (arr[j-1] > arr[j]){
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
        }
    }
    return arr;
};

let arr = [5, 3, 7, 9, 1, 2, 8, 4, 6];
console.log(bubble(arr));