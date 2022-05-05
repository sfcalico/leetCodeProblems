// 225. Implement Stack using Queues
// first submission, wrong answer
var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue ? false : true;
};
