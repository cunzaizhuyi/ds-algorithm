
// 测试用例请使用： LeetCode-144. 二叉树的前序遍历



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
var preorderTraversal = function(root) {
    let arr = [];
    let dfs = (node) => {
        if (!node) return;
        arr.push(node.val);
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return arr;
};