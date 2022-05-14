// 83. Remove Duplicates from Sorted List
// First submission, rejected

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
var deleteDuplicates = function(head) {
    let current = head;
    const hash = {};
    hash[current.val] = true;
    while (current.next !== null) {
        if (hash[current.next.val]) {
            current.next = current.next.next;    
        } else {
            current = current.next;
            hash[current.val] =  true;
        }
    }
    return head;
};
