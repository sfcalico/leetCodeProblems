// 206. Reverse Linked List
// Runtime: 76 ms, faster than 67.11% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 43.9 MB, less than 90.48% of JavaScript online submissions for Reverse Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let newHead = new ListNode();
    let newNext = new ListNode();
    while (head !== null) {
        newNext = head.next;
        head.next = newHead.next;
        newHead.next = head;
        head = newNext;
    }
    return newHead.next;
};
