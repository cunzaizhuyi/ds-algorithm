

// 二路归并
let mergeSort = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let res = [];
    while(i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            res.push(arr1[i])
            i++;
        }else{
            res.push(arr2[j])
            j++;
        }
    }
    if (i < arr1.length){
        res.push(...arr1.slice(i));
    }
    if(j < arr2.length){
        res.push(...arr2.slice(j));
    }
    return res;
}

let arr1 = [1,3,5,7, 9];
let arr2 = [2,4,6];
console.log(mergeSort(arr1, arr2))