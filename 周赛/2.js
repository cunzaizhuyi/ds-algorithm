


var numWays = function(n, relation, k) {
    let ans = [];
    relation.sort((a, b) => {
        return a[0] - b[0];
    })

    let dfs = (p, cur, arr, k) => {
        p = p + cur[1];
        if (k === 0){
            if (cur[1]===n-1 && arr.indexOf(p) === -1) {
                ans.push(p);
            }
            return;
        }
        for(let i = 0; i < arr.length; i++){
            if(arr[i][0] === cur[1]){
                dfs(p, arr[i], arr, k-1);
            }
        }
    }

    for(let i = 0; i < relation.length; i++){
        if(relation[i][0] === 0){
            dfs('0',relation[i], relation, k-1);
        }
    }
    return ans.length;
};

console.log(numWays(5,[[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]],3))