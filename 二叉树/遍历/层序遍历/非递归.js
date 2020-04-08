
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
    let queue = [root];
    while(queue.length){
        let first = queue.shift();
        arr.push(first.val);
        if (first.left){
            queue.push(first.left);
        }
        if (first.right){
            queue.push(first.right);
        }
    }
    return arr;
};

// 输出的是这种形式
// [3,9,20，15,7]