// 412. Fizz Buzz
// First Submission - the first question in my very first technical interview as to do this same type of problem, i was so surprised!
// Runtime: 88 ms, faster than 51.58% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 44.5 MB, less than 39.40% of JavaScript online submissions for Fizz Buzz.

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz');
        } else if (i % 3 === 0) {
            arr.push('Fizz');
        } else if (i % 5 === 0) {
            arr.push('Buzz');
        } else {
            arr.push(i.toString());
        }
    }
    return arr;
};
