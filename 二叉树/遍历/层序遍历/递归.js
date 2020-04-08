// 102. 二叉树的层序遍历


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root)return [];

    let arr = [];
    let bfs = (nodes) => {
        let nextLevel = [];
        let curLevelVal = [];
        for(let i = 0; i < nodes.length; i++){
            curLevelVal.push(nodes[i].val);
            if (nodes[i].left){
                nextLevel.push(nodes[i].left);
            }
            if (nodes[i].right){
                nextLevel.push(nodes[i].right);
            }
        }
        arr.push(curLevelVal);
        if (!nextLevel.length) return;
        bfs(nextLevel);
    };
    bfs([root]);
    return arr;
};

// 输出的是这种形式
//[
//   [3],
//   [9,20],
//   [15,7]
// ]