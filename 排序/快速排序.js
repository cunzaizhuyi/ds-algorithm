

let quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = ~~(arr.length / 2);
    let v = arr.splice(mid, 1);
    let l = [];
    let r = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < v){
            l.push(arr[i])
        }else{
            r.push(arr[i])
        }
    }
    return quickSort(l).concat(v, quickSort(r));
}

let arr = [3,1,4,2,7,5,8,6,9]
// let arr = [3,1,4,2]
console.log(quickSort(arr))