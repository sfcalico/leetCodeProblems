// 202. Happy Number
// First attempt (didn't submit since test failed)

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n < 1) return false;
    if (n === 1) return true;
    let div = n.toString().split('');
    div.map(num => num * num);
    let num = 0;
    for (let i = 0; i < div.length; i++) {
        num += i;
    }
    return isHappy(num);
};

// Second Submission, runtime error
const isHappy = function(n) {
    let set = new Set();
    if (n < 1) {
        return false;
    } else if (n === 1) {
        return true;
    }
    let str = n.toString();
    let num = 0;
    for (let number of str) {
        num += number * number;
    }
    if (set.has(num)) {
        return false;
    } else {
        set.add(num);
    }
    return isHappy(num);
};
