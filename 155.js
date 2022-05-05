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
