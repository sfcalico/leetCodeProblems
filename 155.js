// First submission
//Runtime: 115 ms, faster than 79.29% of JavaScript online submissions for Min Stack.
//Memory Usage: 49.8 MB, less than 62.30% of JavaScript online submissions for Min Stack.

var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.min.length === 0 || val <= this.min[this.min.length -1]) {
        this.min.push(val);
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.min.length) {
        const val = this.stack.pop();
        if (val === this.min[this.min.length - 1]) {
            this.min.pop();
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length) {
        return this.stack[this.stack.length -1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.min.length) {
        return this.min[this.min.length - 1];
    }
};

// Second submission, I recoded the last two functions, top() and getMin(), to use the ternary operator instead of if statements to see how it would affect the runtime and memory usage.
// It turns out that it's slower, but uses up less memory
//Runtime: 146 ms, faster than 55.19% of JavaScript online submissions for Min Stack. cf. 115 ms, faster than 79.29%
//Memory Usage: 49.1 MB, less than 94.08% of JavaScript online submissions for Min Stack. cf. 49.8 MB, less than 62.30%

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length -1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.length ? this.min[this.min.length -1] : null;
};
