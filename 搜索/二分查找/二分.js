
let binSearch = (sortedArr, target) => {
    if (!sortedArr.length) return false;
    let l = 0;
    let r = sortedArr.length - 1;
    let mid = ~~((l + r) / 2);
    while(l <= r){
        mid = ~~((l + r) / 2);
        if (sortedArr[mid] > target){
            r = mid - 1;
        }else if(sortedArr[mid] < target){
            l = mid + 1;
        } else{
            return mid; // 找到了
        }
    }
    return false; // 没找到
}
console.log(binSearch([1,2,3,4,5,6,7,8,9], 3))