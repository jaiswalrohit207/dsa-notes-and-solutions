/**
 * Problem: Min Stack (0014)
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * 
 * Example:
 * const minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 * 
 * Constraints:
 * - -2^31 <= val <= 2^31 - 1
 * - pop, top and getMin operations will always be called on non-empty stacks
 * 
 * Time Complexity: O(1) - all operations
 * Space Complexity: O(n) - for storing elements
 */

/**
 * MinStack class with O(1) getMin() operation
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * Pushes element onto stack
   * @param {number} val - Value to push
   */
  push(val) {
    this.stack.push(val);
    const currentMin = this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1];
    this.minStack.push(Math.min(currentMin, val));
  }

  /**
   * Removes and returns top element
   */
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * Returns top element without removing
   * @returns {number} - Top element
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * Returns minimum element in the stack
   * @returns {number} - Minimum element
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

module.exports = MinStack;
