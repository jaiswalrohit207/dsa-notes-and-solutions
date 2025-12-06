const { ListNode, mergeTwoLists } = require('../../src/linked-list/0012-merge-sorted-lists');

function createLinkedList(arr) {
  if (!arr.length) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(head) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

describe('0012 - Merge Two Sorted Lists', () => {
  test('should merge two sorted lists', () => {
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test('should handle empty first list', () => {
    const list1 = null;
    const list2 = createLinkedList([0]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([0]);
  });

  test('should handle both empty lists', () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });
});
