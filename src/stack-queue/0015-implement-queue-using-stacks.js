/**
 * Problem: Implement Queue Using Stacks (0015)
 * 
 * Implement a first in first out (FIFO) queue using only two stacks.
 * 
 * Example:
 * const queue = new MyQueue();
 * queue.push(1);
 * queue.push(2);
 * queue.peek(); // return 1
 * queue.pop();  // return 1
 * queue.empty(); // return false
 * 
 * Constraints:
 * - 1 <= x <= 9
 * - At most 100 calls to push, pop, peek, and empty
 * - All the calls to pop and peek are valid
 * 
 * Time Complexity: O(1) amortized for all operations
 * Space Complexity: O(n) - for storing elements
 */

/**
 * Queue implementation using two stacks
 */
class MyQueue {
  constructor() {
    this.stack1 = []; // for push
    this.stack2 = []; // for pop/peek
  }

  /**
   * Pushes element x to the back of queue
   * @param {number} x - Value to push
   */
  push(x) {
    this.stack1.push(x);
  }

  /**
   * Removes the element from the front of queue and returns it
   * @returns {number} - Front element
   */
  pop() {
    this.peek(); // Ensure stack2 has elements
    return this.stack2.pop();
  }

  /**
   * Returns the element at the front of queue
   * @returns {number} - Front element
   */
  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  /**
   * Returns whether the queue is empty
   * @returns {boolean} - True if empty
   */
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

module.exports = MyQueue;
