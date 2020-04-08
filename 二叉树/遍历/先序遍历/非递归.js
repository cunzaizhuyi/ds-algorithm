
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
    // 坑爹case
    if (!root) return [];
    // dfs非递归用栈解决。
    let arr = [];
    let stack = [root];

    while(stack.length){
        let top = stack.pop();
        arr.push(top.val);
        // 注意，先压栈右节点，再压栈左节点
        if (top.right){
            stack.push(top.right);
        }
        if (top.left){
            stack.push(top.left);
        }
    }
    return arr;
};