
//145. 二叉树的后序遍历

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
var postorderTraversal = function(root) {
    let arr = [];
    let dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        arr.push(node.val);
    };
    dfs(root);
    return arr;
};