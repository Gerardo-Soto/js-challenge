/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Encuentra la ruta desde la raíz hasta un nodo con el valor target
 * @param {TreeNode} root
 * @param {number} target
 * @param {string[]} path
 * @return {boolean}
 */
var getDirections = function(root, startValue, destValue) {
    const findPathFromRoot = (curNode, targetValue, pathToAppend) => {
        if (!curNode) return false;
        if (curNode.val === targetValue) return true;

        pathToAppend.push("R");
        if (findPathFromRoot(curNode.right, targetValue, pathToAppend)) return true;
        pathToAppend.pop();

        pathToAppend.push("L");
        if (findPathFromRoot(curNode.left, targetValue, pathToAppend)) return true;
        pathToAppend.pop();

        return false;
    };

    const pathToStart = [];
    const pathToDestination = [];

    findPathFromRoot(root, startValue, pathToStart);
    findPathFromRoot(root, destValue, pathToDestination);

    console.log(pathToStart, pathToDestination);

    let commonPathLen = 0;
    while (commonPathLen < pathToStart.length &&
           commonPathLen < pathToDestination.length &&
           pathToStart[commonPathLen] === pathToDestination[commonPathLen]) {
        commonPathLen++;
    }

    const res = [];
    for (let i = 0; i < pathToStart.length - commonPathLen; i++) {
        res.push("U");
    }
    console.log(res);
    res.push(...pathToDestination.slice(commonPathLen));

    return res.join("");
};

const rootValues = [5,1,2,3,null,6,4], startValue = [5], destValue = [6];

function arrayToBinaryTree(arr) {
    if (arr.length === 0) return null;
    
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (i < arr.length && arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const root = arrayToBinaryTree(rootValues);

const findPathSolution = getDirections(root, startValue, destValue);
console.log(findPathSolution);