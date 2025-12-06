const { ListNode, reverseList } = require('../../src/linked-list/0011-reverse-linked-list');

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

describe('0011 - Reverse Linked List', () => {
  test('should reverse a simple linked list', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  test('should handle single element', () => {
    const head = createLinkedList([1]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([1]);
  });

  test('should handle two elements', () => {
    const head = createLinkedList([1, 2]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([2, 1]);
  });

  test('should handle null', () => {
    expect(reverseList(null)).toBeNull();
  });

  test('should handle large list', () => {
    const head = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
