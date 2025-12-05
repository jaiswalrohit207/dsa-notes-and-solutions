/**
 * Problem: Reverse String
 * Difficulty: Easy
 * Topic: Strings
 * Time: O(n)
 * Space: O(1) - excluding output array
 *
 * Approach: Use two pointers to swap characters
 */

function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}

module.exports = reverseString;
