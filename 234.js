// 234. Palindrome Linked List
// First submission
// Runtime: 189 ms, faster than 62.87% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 72.2 MB, less than 64.51% of JavaScript online submissions for Palindrome Linked List.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    const arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
