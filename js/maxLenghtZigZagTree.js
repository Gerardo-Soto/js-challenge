/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let pathLength = 0;
    function dfs(root, left, right, pathLength) {
        if (root === 0) {
            return;
        };
    
        pathLength = Math.max(pathLength, Math.max(left, right));
    
        if (root.left != null) {
            dfs(root.left, right + 1, 0);
        };
    
        if (root.right != null) {
            dfs(root.right, 0, left + 1);
        };
    };
    dfs(root, 0, 0, pathLength);

    return pathLength;
};



const root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1];

console.log(`Sol::: [${longestZigZag(root)}]`);