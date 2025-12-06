# Problem 0005: Zigzag Conversion

## Problem Summary
Write a string in a zigzag pattern on given number of rows, then read off row by row.

## Key Concepts
- **Pattern Recognition**: Understanding the zigzag pattern cycle
- **Row Tracking**: Maintaining which row each character belongs to
- **Direction Tracking**: Moving down then up in the zigzag pattern
- **Cycle Calculation**: Pattern repeats every (2*numRows - 2) characters

## Solution Approaches
1. **String Arrays**: Create arrays for each row, append characters
2. **Cycle-based**: Calculate row index using modulo of cycle length
3. **Direction Tracking**: Use direction flag to toggle between down/up movement

## Time-Space Complexity
- **All Approaches**: O(n) time, O(n) space for result

## Interview Tips
- Explain the zigzag pattern cycle for rows
- Discuss edge cases: single row, two rows, single character
- Mention cycle length formula: 2*numRows - 2
- Explain index calculation for each character position
