// 237. Delete Node in a Linked List
// First submission
// Runtime: 122 ms, faster than 10.78% of JavaScript online submissions for Delete Node in a Linked List.
// Memory Usage: 43.6 MB, less than 98.68% of JavaScript online submissions for Delete Node in a Linked List.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
