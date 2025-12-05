# Best Time to Buy and Sell Stock

## Problem Statement
Given an array `prices` where `prices[i]` is the price of a given stock on the ith day, find the maximum profit you can make by buying and selling the stock once. You must sell before you buy again.

## Examples

**Example 1:** `[7,1,5,3,6,4]`  
Output: `5`  
Explanation: Buy at 1, sell at 6. Profit = 6 - 1 = 5

**Example 2:** `[7,6,4,3,1]`  
Output: `0`  
Explanation: No profit possible as prices only decrease

## Approach
**One Pass Solution** - O(n) Time, O(1) Space
- Track the minimum price seen so far
- At each price, calculate profit if we sell at that price
- Keep track of maximum profit seen
- No need for nested loops or extra data structures

## Key Insights
- We only need ONE pass through the array
- At each point, we know: min price so far and best profit so far
- Optimal solution: greedy approach works perfectly here

## Time & Space Complexity
- **Time:** O(n) - single pass
- **Space:** O(1) - only using two variables
