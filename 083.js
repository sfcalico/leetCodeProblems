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

// Second submission
// Runtime: 93 ms, faster than 54.40% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 43.9 MB, less than 87.36% of JavaScript online submissions for Remove Duplicates from Sorted List.

var deleteDuplicates = function(head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;    
        } else {
            current = current.next;
        }
    }
    return head;
};
