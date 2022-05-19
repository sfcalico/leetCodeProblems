// 20. Valid Parentheses
// 8th submission
// Runtime: 97 ms, Your runtime beats 29.25 % of javascript submissions.
// Memory Usage: 42.4 MB, Your memory usage beats 48.65 % of javascript submissions.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const matchingChars = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            matchingChars.push(s[i]);
        } else if (s[i] === ')' && matchingChars.length !== 0 && matchingChars[matchingChars.length - 1] === '(') {
            matchingChars.pop();
        } else if (s[i] === '}' && matchingChars.length !== 0 && matchingChars[matchingChars.length - 1] === '{') {
            matchingChars.pop();
        } else if (s[i] === ']' && matchingChars.length !== 0 && matchingChars[matchingChars.length - 1] === '[') {
            matchingChars.pop();
        } else {
            return false;
        }
    }
    return matchingChars.length === 0;
};
