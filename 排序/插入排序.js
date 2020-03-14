

let insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++){
        for (let j = 0; j < i; j++){
            if(arr[i] < arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}
console.log(insertSort([4,2,6,1,7,3,8,0,9,5]))