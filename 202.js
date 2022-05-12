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
