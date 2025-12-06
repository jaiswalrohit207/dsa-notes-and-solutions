const { ListNode, hasCycle } = require('../../src/linked-list/0013-detect-cycle');

describe('0013 - Detect Cycle in Linked List', () => {
  test('should detect cycle', () => {
    const node1 = new ListNode(3);
    const node2 = new ListNode(2);
    const node3 = new ListNode(0);
    const node4 = new ListNode(-4);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; // cycle
    expect(hasCycle(node1)).toBe(true);
  });

  test('should not detect cycle for linear list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    expect(hasCycle(head)).toBe(false);
  });

  test('should handle single node without cycle', () => {
    expect(hasCycle(new ListNode(1))).toBe(false);
  });

  test('should handle null', () => {
    expect(hasCycle(null)).toBe(false);
  });
});
