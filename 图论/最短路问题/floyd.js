
// 用于求：多源最短路问题。复杂度O(n3)。
let floyd = (adjMatrix) => {
    let k = adjMatrix.length; // 顶点数
    // K轮松弛
    for(let i = 0; i < k; i++){
        for(let j = 0; j < adjMatrix.length; j++){
            for(let k = 0; k < adjMatrix.length; k++){
                if (j !== k){
                    adjMatrix[j][k] = Math.min(adjMatrix[j][k], adjMatrix[j][i] + adjMatrix[i][k])
                }
            }
        }
    }
    return adjMatrix;
};

// 这是《啊哈！算法》里的测试用例
let adjMax = [
    [0, 2, 6, 4],
    [Infinity, 0, 3, Infinity],
    [7, Infinity, 0, 1],
    [5, Infinity, 12, 0]
];
console.log(floyd(adjMax));