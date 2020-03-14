// 1 找一个入度为0的顶点，加入结果集
// 2 删除该顶点的出度边
// 3 重复步骤1,2，直到所有顶点进入结果集 or 监测出有环
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
    }
    let rudu = trans(adj);
    let vArr = [];
    // 查找入度为0的顶点
    let getRu0V = (n, vArr) => {
        // 假设顶点从1开始计数，而不是0
        for (let i = 1; i <= n; i++){
            if ((!rudu[i] || !rudu[i].length) && vArr.indexOf(i) === -1){
                return i;
            }
        }
        return false;
    }
    while(vArr.length < n){
        let v = getRu0V(n, vArr);
        if (v === false) return 'cycle!'
        vArr.push(v / 1);
        // 删掉v的所有出度边
        for(let k in rudu){
            if (rudu[k].indexOf(v + '') > -1){
                rudu[k].splice(rudu[k].indexOf(v + ''), 1);
            }
        }
    }
    return vArr;
}
console.log(topoSort(5, adj))