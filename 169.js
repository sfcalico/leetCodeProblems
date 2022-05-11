// 169. Majority Element
// First submission, not accepted

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 0;
        }
        hash[nums[i]]++;
        if (hash[nums[i]] > max) {
            max = nums[i];
        }
    }
    return max;
};

// second submission
// Runtime: 64 ms, faster than 95.55% of JavaScript online submissions for Majority Element.
// Memory Usage: 43.3 MB, less than 90.82% of JavaScript online submissions for Majority Element.
// 
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let max = 0;
    let maj = 0;
    for (let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 0;
        }
        hash[nums[i]]++;
        if (hash[nums[i]] > max) {
            maj = nums[i];
            max = hash[nums[i]];
        }
    }
    return maj;
};
