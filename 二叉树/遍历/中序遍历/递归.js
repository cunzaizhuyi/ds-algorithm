// 测试用例请使用LeetCode94题
// 94. 二叉树的中序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
    // 核心代码，只需要下面dfs里的4行
    let dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    };
    dfs(root);
    return arr;
};