// 136. Single Number
// First submission
// Runtime: 116 ms, faster than 36.50% of JavaScript online submissions for Single Number.
// Memory Usage: 48.7 MB, less than 12.49% of JavaScript online submissions for Single Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
         if (!obj[nums[i]]) {
             obj[nums[i]] = 1;
         } else {
             obj[nums[i]] += 1;
         }
    }
    const min = Object.keys(obj).map(function(key) {
        return {
            "key": key,
            "value": obj[key]
        }
    }).sort(function(a, b) {
        return a.value - b.value
    })[0];
    return min.key;
};
