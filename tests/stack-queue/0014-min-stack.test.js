const { MinStack } = require('../../src/stack-queue/0014-min-stack');

describe('0014 - Min Stack', () => {
  test('should track min value', () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
    stack.pop();
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });

  test('should handle single element', () => {
    const stack = new MinStack();
    stack.push(1);
    expect(stack.getMin()).toBe(1);
    expect(stack.top()).toBe(1);
  });

  test('should work with all same values', () => {
    const stack = new MinStack();
    stack.push(5);
    stack.push(5);
    stack.push(5);
    expect(stack.getMin()).toBe(5);
  });
});
