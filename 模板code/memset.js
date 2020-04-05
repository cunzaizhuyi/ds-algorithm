

// 用指定值，对1维数组初始化
let initArray = (len, val) => {
    let arr = [];
    for(let i = 0; i < len; i++){
        arr[i] = val;
    }
    return arr;
};

// 用指定值，对二维数组初始化
let initArr = (rowSize, colSize, val) => {
    let arr = [];
    for(let i = 0; i < rowSize.length; i++){
        for(let j = 0; j < colSize.length; j++){
            arr[i][j] = val;
        }
    }
    return arr;
};