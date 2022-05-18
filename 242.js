// 242. Valid Anagram
// First submission, accepted
// Runtime: 94 ms, faster than 71.06% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 44.5 MB, less than 44.17% of JavaScript online submissions for Valid Anagram.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const h1 = {};
    const h2 = {};
    for (const letter of s) {
        h1[letter] ? h1[letter]++ : h1[letter] = 1;
    }
    for (const letter of t) {
        h2[letter] ? h2[letter]++ : h2[letter] = 1;
    }
    return Object.keys(h1).every(
        key => h2.hasOwnProperty(key)
            && h2[key] === h1[key]);
};
