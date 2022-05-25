// 326. Power of Three
// First submission
// Runtime: 294 ms, faster than 51.71% of JavaScript online submissions for Power of Three.
// Memory Usage: 51.5 MB, less than 35.16% of JavaScript online submissions for Power of Three.

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    if (n === 1) {
        return true;
    } else if (n > 1 && n % 3 === 0) {
        return isPowerOfThree(n / 3);
    } else {
        return false;
    }
};
