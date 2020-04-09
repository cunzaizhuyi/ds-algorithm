// 测试用例请使用： LeetCode-94. 二叉树的中序遍历

//https://blog.csdn.net/z_ryan/article/details/80854233

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * 我们选用栈来存放需要处理的二叉树节点，出栈顺序即二叉树的遍历顺序.
 */
var inorderTraversal = function(root) {
    if (!root) return [];

    let ans = [];

    // 需要维护 栈和一个指针，指向当前节点
    let stack = [];
    let p = root;
    while(stack.length || p){
        while(p){
            stack.push(p);
            p = p.left;
        }
        if (stack.length){
            p = stack.pop();
            ans.push(p.val);
            p = p.right;
        }
    }
    return ans;
};