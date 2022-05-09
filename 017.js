// 17. Letter Combinations of a Phone Number
// first submission
// Runtime: 111 ms, faster than 7.08% of JavaScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 42.3 MB, less than 38.54% of JavaScript online submissions for Letter Combinations of a Phone Number.

/**
 * @param {string} digits
 * @return {string[]}
 */
const letters = {
    1: [],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: []
}

var letterCombinations = function(digits) {
       
    if (!digits.length) {
        return [];
    }
    
    let lastDigits = [''];
    
    for (let i = 0; i < digits.length; i++) {
        let newDigits = [];
        for (let j = 0; j < lastDigits.length; j++) {
            for (let letter of letters[digits[i]]) {
                newDigits.push(lastDigits[j].concat(letter));
            }
        }
        if (i === digits.length - 1) {
            return newDigits;
        }
        lastDigits = newDigits;
    }    
};
