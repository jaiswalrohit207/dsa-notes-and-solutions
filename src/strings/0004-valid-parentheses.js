/**
 * Problem: Valid Parentheses
 * Difficulty: Easy
 * Topic: Strings/Stack
 * Time: O(n)
 * Space: O(n)
 *
 * Approach: Use a stack to match opening and closing brackets
 */

function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  
  for (const char of s) {
    if (char in map) {
      if (stack.length === 0 || stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

module.exports = isValid;
