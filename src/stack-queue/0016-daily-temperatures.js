/**
 * Problem: Daily Temperatures (0016)
 * 
 * Given an array of integers temperatures representing the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to wait after
 * the ith day to get a warmer temperature. If there is no future day for which this is possible,
 * keep answer[i] == 0 instead.
 * 
 * Example:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * 
 * Constraints:
 * - 1 <= temperatures.length <= 10^5
 * - 30 <= temperatures[i] <= 100
 * 
 * Time Complexity: O(n) - each element visited at most twice
 * Space Complexity: O(n) - for stack storage
 */

/**
 * Calculates daily temperatures using a monotonic stack
 * @param {number[]} temperatures - Array of daily temperatures
 * @returns {number[]} - Array with days to wait for warmer temperature
 */
function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = []; // Store indices

  for (let i = 0; i < temperatures.length; i++) {
    // Pop stack while current temperature is greater than stack top
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return result;
}

module.exports = dailyTemperatures;
