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
