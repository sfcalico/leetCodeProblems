// 387. First Unique Character in a String
// First submission, accepted
// Runtime: 126 ms, faster than 63.83% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 44.4 MB, less than 99.02% of JavaScript online submissions for First Unique Character in a String.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const hash = {};
    for (const letter of s) {
        if (!hash[letter]) {
            hash[letter] = 1;
        } else {
            hash[letter]++
        }
    }
    for (const letter of s) {
        if (hash[letter] === 1) {
            return s.indexOf(letter);
        }
    }
    return -1;
};
