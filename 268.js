// 268. Missing Number
// First submission
// Runtime: 90 ms, faster than 59.65% of JavaScript online submissions for Missing Number.
// Memory Usage: 44.4 MB, less than 65.25% of JavaScript online submissions for Missing Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => a - b)
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
    return i;
};
