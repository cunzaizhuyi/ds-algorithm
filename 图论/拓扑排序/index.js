
// 1 找所有入度为0的顶点，入栈
// 2 选一个栈中元素，loop
//      2.1 该顶点加入结果集
//      2.2 删除所有该元素的出度边
//      2.3 在删除的过程中，如有顶点的入度变成0. 将该元素入栈
// 3 根据能排出来的顶点个数是否是全部的顶点，来判断是否有环。如果没环，则所有顶点拓扑序输出。

let topoSort = (n, adj) => {

    // 转换成入度表
    let trans = (adj) => {
        let rudu = {};
        for(let k in adj){
            let pointArr = adj[k];
            for (let i = 0; i < pointArr.length; i++){
                if(!rudu[pointArr[i]]) rudu[pointArr[i]] = [];
                rudu[pointArr[i]].push(k);
            }
        }
        return rudu;
    };
    let rudu = trans(adj);

    // 查找入度为0的顶点
    let getAllRuDu0V = (n, rudu) => {
        let arr = [];
        // 假设顶点从1开始计数，而不是0
        for (let i = 1; i <= n; i++){
            if ((!rudu[i] || !rudu[i].length)){
                arr.push(i);
            }
        }
        return arr;
    };

    let topoArr = [];
    let stack = getAllRuDu0V(n, rudu);
    while(stack.length !== 0){
        let v = stack.pop();
        topoArr.push(v);
        // 删掉顶点v的所有出度边
        for(let k in rudu){
            let index = rudu[k].indexOf(v + '');
            if (index > -1){
                rudu[k].splice(index, 1);
                // 将 新增的 入度为0的节点压栈
                if(rudu[k].length === 0){
                    stack.push(k / 1);
                }
            }
        }
    }
    return topoArr.length === n ? topoArr: '有环';
};

// 邻接表
let adj = {
    1: [2, 3],
    2: [3, 4],
    4: [3],
    5: [2, 4]
};
console.log(topoSort(5, adj));

// 入度表
let rudu = {
    2: [1, 5],
    3: [1, 2, 4],
    4: [2, 4]
};