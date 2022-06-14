// 2. Add Two Numbers
// first submission
// Runtime: 170 ms, faster than 30.55% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 47.2 MB, less than 62.30% of JavaScript online submissions for Add Two Numbers.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let root = new ListNode(0);
    let node = root;
    let sum = 0;
    let carry = 0;
    
    while (l1 || l2 || sum > 0) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum > 9) {
            carry = 1;
            sum -= 10
        }
        node.next = new ListNode(sum);
        node = node.next;
        
        sum = carry;
        carry = 0;
    }
    
    return root.next;
};
