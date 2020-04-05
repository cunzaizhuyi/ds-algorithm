
// 找二分图最大匹配


// 用指定值，对一维数组初始化
let initArray = (len, val) => {
    let arr = [];
    for(let i = 0; i < len; i++){
        arr[i] = val;
    }
    return arr;
};

let maxMatch = (xSize, ySize, matrix) => {
    let result = initArray(ySize, -1); //记录当前与y节点相连的x的节点
    let used; // 记录在一次增广路查找中，y中节点是否使用

    // 找增广路
    let find = (x) => {
        for (let i = 0; i < ySize; i++){
            if (matrix[x][i] && !used[i]) {
                used[i] = true;
                if (result[i] === -1 || find(result[i])) {
                    result[i] = x;
                    return true;
                }
            }
        }
        return false;
    };

    let cnt = 0;
    for(let i = 0; i < xSize; i++){
        // 这一步很重要
        used = initArray(xSize, 0);
        if (find(i)) cnt++;
    }
    console.log('result: ', result);
    return cnt;
};


// 输入邻接矩阵
// 行列含义不同。行表示X集合，列表示Y集合。matrix[i][j]表示：X集合的i点 对 Y集合的j点 有边
let matrix = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 0]
];

// 《啊哈！算法》case
let m2 = [
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0]
];

console.log(maxMatch(4, 4, matrix))
// console.log(maxMatch(3, 5, m2));