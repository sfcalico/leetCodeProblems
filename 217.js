// 217. Contains Duplicate
// First Submission
// Runtime: 121 ms, faster than 51.93% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 50.5 MB, less than 79.78% of JavaScript online submissions for Contains Duplicate.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            return true;
        } else {
            hash[nums[i]] = true;
        }
    }
    return false;
};
