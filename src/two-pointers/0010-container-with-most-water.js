/**
 * Problem: Container With Most Water
 * Difficulty: Medium
 * Topic: Two Pointers
 * Time: O(n)
 * Space: O(1)
 *
 * Approach: Two pointers from ends, move the shorter line inward
 * Area = width * height, maximize by moving shorter line
 */

function maxArea(height) {
  let left = 0, right = height.length - 1;
  let maxWater = 0;
  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, width * h);
    height[left] < height[right] ? left++ : right--;
  }
  return maxWater;
}

module.exports = maxArea;
