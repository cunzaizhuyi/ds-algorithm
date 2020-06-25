
// DFS模板
let dfsTmpl = (nums) => {
    let ans = [];
    let vis = [];
    let curPath = [];
    let dfs = (idx, nums) => {
        if(idx === nums.length) {
            // 这里根据你想要输出的形式，有不同的代码
            ans.push([...curPath]);
            return;
        }

        for (let i = 0; i < nums.length; i++){
            if(vis[i]) continue;

            curPath.push(nums[i]);
            vis[i] = true; // 表示是否往res放过的哈希
            dfs(idx + 1, nums);
            vis[i] = false;
            curPath.pop();
        }
    };
    dfs( 0, nums);
    return ans;
};


// 全排列示例。
let fn = (nums) => {
    let ans = [];
    let vis = [];
    let path = [];
    let dfs = (idx, nums) => {
        if(idx === nums.length) {
            ans.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++){
            if(vis[i]) continue;

            path.push(nums[i]);
            vis[i] = true; // 表示是否往res放过的哈希
            dfs(idx + 1, nums);

            vis[i] = false;
            path.pop();
        }
    }
    dfs( 0, nums);
    return ans;
}
console.log(fn([1,2,3]))