# Two Sum - Problem 0001

## Problem Statement
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to the target. Each input has exactly one solution.

## Key Insights
- Use a hash map to store values we've seen and their indices
- For each number, check if (target - number) exists in the hash map
- This allows us to find the pair in O(n) time

## Approach
1. Create a map to store value -> index mappings
2. Iterate through array
3. For each number, check if complement exists in map
4. If found, return the indices
5. Otherwise, add current number to map

## Complexity Analysis
- **Time**: O(n) - single pass through array
- **Space**: O(n) - for the hash map

## Tips for Interview
- Discuss trade-offs between brute force (O(n²)) and hash map approach
- Mention edge cases: duplicates, negative numbers, zero
- Ask about whether the same element can be used twice
