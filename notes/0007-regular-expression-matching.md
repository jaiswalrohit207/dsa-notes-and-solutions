# Problem 0007: Regular Expression Matching

## Problem Summary
Implement regular expression matching with '.' and '*' support. '.' matches any single character, '*' matches zero or more of the preceding element.

## Key Concepts
- **Dynamic Programming**: DP table for memoization of subproblems
- **Pattern Matching**: Handle '.' (any char) and '*' (zero or more)
- **Base Cases**: Empty pattern matches empty string
- **Recurrence**: Check current chars, handle '*' for zero/one/multiple matches

## Solution Approaches
1. **DP 2D Array**: Build DP table bottom-up
2. **Memoization**: Top-down recursive with caching
3. **Backtracking**: Recursive pattern matching

## Time-Space Complexity
- **DP**: O(m*n) time, O(m*n) space
- **Memoization**: O(m*n) time, O(m*n) space

## Interview Tips
- Explain DP state definition
- Handle '*' matching zero occurrences carefully
- Discuss edge cases: empty string, empty pattern
- Mention complexity improvements possible
