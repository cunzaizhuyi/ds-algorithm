
// 判定图是否是二分图（Bi-Partite Graph）。可以BFS也可以DFS。反正就是染色法

// 针对的是无向图

// 使用邻接表存储方式


// BFS: n是顶点数
let isBGraph = (n, adj) => {
    let q = [];
    // 取一个有边的点
    for (const key in adj) {
        q.push(key);
        break;
    }
    let vis = [];
    vis[q[0]] = 1;
    while(q.length){
        let adjEArr = adj[q[0]];
        for(let i = 0; i < adjEArr.length; i++){
            // 邻接点还没染色
            if (!vis[adjEArr[i]]){
                // 染成相反色，入队
                vis[adjEArr[i]] = -vis[q[0]];
                q.push(adjEArr[i]);
            }else{
                // 邻接点已经染色，但是跟当前点色彩一样
                if (vis[adjEArr[i]] === vis[q[0]]){
                    return false;
                }
            }
        }
        q.shift();
    }
    return true;
};



let adj = {
    1: [2,3,4],
    2: [1,3],
    3: [1, 2],
    4: [1]
};
console.log(isBGraph(4, adj));