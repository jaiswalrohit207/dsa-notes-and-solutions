/**
 * Problem: Majority Element
 * Difficulty: Easy
 * Topic: Arrays
 * Time: O(n)
 * Space: O(1) - Boyer-Moore Voting
 *
 * Approach: Boyer-Moore Voting Algorithm
 * Track candidate and count, when count = 0, switch candidate
 */

function majorityElement(nums) {
  let candidate = null, count = 0;
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}

module.exports = majorityElement;
