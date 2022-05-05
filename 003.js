// 3. Longest Substring Without Repeating Characters
// Runtime: 112 ms, faster than 70.87% of JavaScript online submissions for Longest Substring Without Repeating Characters.
//Memory Usage: 46.1 MB, less than 84.33% of JavaScript online submissions for Longest Substring Without Repeating Characters.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let current = [];
    let longest = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = current.indexOf(s[i]);
        if (currentChar !== -1) {
            current.splice(0, currentChar + 1);
        }
        current.push(s[i]);
        longest = Math.max( longest, current.length);
    }
    return longest;
};
