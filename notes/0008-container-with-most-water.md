# Problem 0008: Container With Most Water

## Problem Summary
Given array of heights, find two lines that form a container holding the most water.

## Key Concepts
- **Two Pointers**: Start from extremes, move towards center
- **Area Calculation**: min(height[i], height[j]) * (j - i)
- **Greedy Choice**: Move pointer pointing to shorter line
- **Optimization**: Prune impossible solutions

## Solution Approaches
1. **Two Pointers**: O(n) time, most efficient
2. **Brute Force**: Check all pairs, O(n^2)

## Time-Space Complexity
- **Two Pointers**: O(n) time, O(1) space
- **Brute Force**: O(n^2) time, O(1) space

## Interview Tips
- Explain greedy approach intuition
- Why move shorter pointer?
- Prove correctness of greedy choice
- Edge cases: equal heights, single element
