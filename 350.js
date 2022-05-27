// 350. Intersection of Two Arrays II
// First attempt, not submitted

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const arr = [];
    for (const num of nums1) {
        if (num in nums2) {
            arr.push(nums1[num]); // or arr.push(num);
        }
    }
    return arr;
};

// First submission, rejected

var intersect = function(nums1, nums2) {
    const arr = [];
    for (let i = 0; i < nums1.length; i++) {
        if(nums2.includes(nums1[i])) {
            arr.push(nums1[i]);
        }
    }
    return arr;
};
