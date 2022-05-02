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


// Second submission, accepted

const sortArrayByParity = function(nums) {
    const arr = [];
    for (let i = nums.length -1; i >= 0; i--) {
        if (nums[i] % 2 == 0) {
            arr.unshift(nums.pop(nums[i]));
        } else {
            arr.push(nums.pop(nums[i]));
        }
    }
    
    return [...arr];
};

//Runtime: 120 ms, faster than 29.26% of JavaScript online submissions for Sort Array By Parity.
//Memory Usage: 44.8 MB, less than 42.95% of JavaScript online submissions for Sort Array By Parity.
