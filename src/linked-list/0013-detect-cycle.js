/**
 * Problem: Detect Cycle in Linked List (0013)
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again
 * by continuously following the next pointer.
 * 
 * Example:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true (cycle exists at node 2)
 * 
 * Constraints:
 * - The number of the nodes is the range [0, 10^4]
 * - -10^5 <= Node.val <= 10^5
 * 
 * Time Complexity: O(n) - Floyd's cycle detection
 * Space Complexity: O(1) - only using two pointers
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Detects if a linked list has a cycle (Floyd's algorithm)
 * @param {ListNode} head - The head of the linked list
 * @returns {boolean} - True if cycle exists, false otherwise
 */
function hasCycle(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

module.exports = { hasCycle, ListNode };
