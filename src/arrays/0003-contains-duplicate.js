/**
 * Problem: Contains Duplicate
 * Difficulty: Easy
 * Topic: Arrays
 * Time: O(n)
 * Space: O(n)
 *
 * Approach: Use a Set to track seen numbers for O(n) performance
 */

function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

module.exports = containsDuplicate;
