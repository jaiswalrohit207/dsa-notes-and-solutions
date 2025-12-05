/**
 * Problem: Merge Two Sorted Lists (0012)
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list and return the head of the merged list.
 * 
 * Example:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * Constraints:
 * - The number of nodes in both lists is in the range [0, 50]
 * - -100 <= Node.val <= 100
 * - Both list1 and list2 are sorted in non-decreasing order
 * 
 * Time Complexity: O(n + m) - visit each node once
 * Space Complexity: O(1) - no extra space used
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Merges two sorted linked lists into one sorted list
 * @param {ListNode} list1 - First sorted linked list
 * @param {ListNode} list2 - Second sorted linked list
 * @returns {ListNode} - Merged sorted linked list
 */
function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach remaining nodes
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
}

module.exports = { mergeTwoLists, ListNode };
