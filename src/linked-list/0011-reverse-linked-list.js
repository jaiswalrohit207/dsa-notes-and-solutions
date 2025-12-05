/**
 * Problem: Reverse Linked List (0011)
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Example:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * Constraints:
 * - The number of nodes in the list is the range [0, 5000]
 * - -5000 <= Node.val <= 5000
 * 
 * Time Complexity: O(n) - traverse each node once
 * Space Complexity: O(1) - only using pointers, no extra space
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Reverses a singly linked list iteratively
 * @param {ListNode} head - The head of the linked list
 * @returns {ListNode} - The new head of the reversed list
 */
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    // Store next node
    const next = current.next;
    // Reverse the link
    current.next = prev;
    // Move prev and current one step forward
    prev = current;
    current = next;
  }

  return prev; // New head
}

module.exports = { reverseList, ListNode };
