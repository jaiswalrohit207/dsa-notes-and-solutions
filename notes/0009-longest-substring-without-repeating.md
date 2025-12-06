# Problem 0009: Longest Substring Without Repeating Characters

## Problem Summary
Find the length of the longest substring without repeating characters.

## Key Concepts
- **Sliding Window**: Use two pointers for window boundaries
- **Character Mapping**: Track character positions or last seen index
- **Window Expansion/Contraction**: Expand right, shrink left when duplicate found

## Solution Approaches
1. **Sliding Window with HashMap**: Track character last positions
2. **Set-based**: Use set to track chars in current window
3. **Array**: Fixed size array for character positions

## Time-Space Complexity
- **All Approaches**: O(n) time, O(min(m,n)) space where m is charset

## Interview Tips
- Explain sliding window technique
- Discuss hash map vs set trade-offs
- Handle edge cases: empty string, all unique, all same
- Optimize space for ASCII vs Unicode
