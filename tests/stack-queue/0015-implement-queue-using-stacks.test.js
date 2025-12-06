const { MyQueue } = require('../../src/stack-queue/0015-implement-queue-using-stacks');

describe('0015 - Implement Queue Using Stacks', () => {
  test('should push and pop elements', () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
  });

  test('should peek at front element', () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.peek()).toBe(1);
  });

  test('should check if empty', () => {
    const queue = new MyQueue();
    expect(queue.empty()).toBe(true);
    queue.push(1);
    expect(queue.empty()).toBe(false);
  });
});
