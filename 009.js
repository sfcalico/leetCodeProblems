// 9. Palindrome Number
// Runtime: 290 ms
// Memory Usage: 50.7 MB

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    reversed = parseInt(x
                       .toString()
                       .split('')
                       .reverse()
                       .join(''))
    if (x === reversed) {
        return true
    } else {
        return false;
    }
};
