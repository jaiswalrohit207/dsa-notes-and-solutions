/**
 * Problem: Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * Topic: Arrays
 * Time: O(n)
 * Space: O(1)
 *
 * Approach:
 * - Single pass through the array
 * - Track minimum price seen so far
 * - At each price, calculate profit if we sell at current price
 * - Keep track of maximum profit
 */

function maxProfit(prices) {
  if (!prices || prices.length < 2) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const profit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

module.exports = maxProfit;
