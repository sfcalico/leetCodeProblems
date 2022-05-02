// 905. Sort Array By Parity

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

// initial submission:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function(nums) {
    const arr = [];
    for (let i = nums.length -1; i >= 0; i--) {
        if (nums[i] % 2 == 0) {
            arr.push(nums.pop(nums[i]));
        }
    }
    return [...arr, ...nums];
};
