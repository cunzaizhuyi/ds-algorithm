

// kruskal n个V
let kruskal = (n, edges) => {
    // 并查集
    let set = [];
    let init = (n, set) => {
        for (let i = 1; i <= n; i++){
            set[i] = i;
        }
    }
    init(n, set);
    let find = (idx) => {
        while(set[idx] !== idx){
            idx = set[idx];
        }
        return idx; // 返回set[idx]也行，反正此时已经相等
    }
    let merge = (v1, v2) => {
        let p1 = find(v1);
        let p2 = find(v2);
        if (p1 !== p2){
            set[p1] = p2;
        }
    }

    // 对边按权重排序
    edges.sort((a, b) => {
        return a[2] - b[2];
    })

    let w = 0; // mst边权和
    let mst = []; // 记录使用了哪些边
    while(mst.length < n - 1){ // mst应该有n-1条边
        // add，判环
        let edge = edges.shift();
        let f1 = find(edge[0]);
        let f2 = find(edge[1]);
        if (f1 !== f2){
            w += edge[2];
            mst.push(edge);
            merge(edge[0], edge[1]);
        }
    }
    return w;
}
console.log(kruskal(5,
    [
        [1, 2, 2],
        [1, 3, 1],
        [2,3,3],
        [2,4,4],
        [4,5,6],
        [3,5,5]
    ]));