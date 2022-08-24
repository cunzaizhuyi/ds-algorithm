// 测试用例请使用： LeetCode-94. 二叉树的中序遍历

//https://blog.csdn.net/z_ryan/article/details/80854233

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


// 可以去LeetCode跑一下程序
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

/**
 * 我们选用栈来存放需要处理的二叉树节点，出栈顺序即二叉树的遍历顺序.
 */
var inorderTraversal = function(root) {
    if (!root) return [];

    let ans = [];

    // 需要维护 栈和一个指针，指向当前节点
    let stack = []; // 栈里只放 某节点的左子树
    let p = root;
    while(stack.length || p){
        // 只要指针还指向某个节点，证明 以p节点为根的 左子树还没入栈完毕
        while(p){
            stack.push(p);
            p = p.left;
        }
        // 弹栈的过程：弹一个节点，当前指针指向节点的右子树的根，如果有这个右子树的根，则下一次循环，会走while(), 继续入栈左子树；
        // 若无，下一次循环不会走while(), 继续再弹出栈里面一个上一级的左子树节点
        if (stack.length){
            p = stack.pop();
            ans.push(p.val);
            p = p.right;
        }
    }
    return ans;
};