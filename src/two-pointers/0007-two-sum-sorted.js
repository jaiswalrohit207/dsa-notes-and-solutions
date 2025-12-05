/**
 * Problem: Two Sum (Sorted Array)
 * Difficulty: Easy
 * Topic: Two Pointers
 * Time: O(n)
 * Space: O(1)
 *
 * Approach: Use two pointers from ends, move based on sum
 */

function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}

module.exports = twoSum;
