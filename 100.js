// 100. Same Tree

// first attempt, getting error on line 23: TypeError: Cannot read properties of undefined (reading 'val')

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    }
    if (p.val === q.val) {
        let left = isSameTree(p.left, q.left);
        let right = isSameTree(p.right, q.right);
        return isSameTree(left, right);
    }
    return false;
};

// second attempt, first submission, accepted
// Runtime: 55 ms, faster than 97.35% of JavaScript online submissions for Same Tree.
// Memory Usage: 42.6 MB, less than 27.39% of JavaScript online submissions for Same Tree.

const isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    } else if (p.val !== q.val) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};
