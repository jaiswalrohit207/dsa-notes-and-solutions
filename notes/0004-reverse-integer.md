# Problem 0004: Reverse Integer

## Problem Summary
Given a signed 32-bit integer, reverse its digits. If reversal causes overflow beyond 32-bit range [-2^31, 2^31 - 1], return 0.

## Key Concepts
- **Integer Overflow**: 32-bit signed integer limits must be respected
- **Sign Preservation**: Negative numbers must remain negative after reversal
- **Modulo & Division**: Extract digits from right to left
- **Edge Cases**: Leading zeros after reversal, overflow conditions

## Solution Approaches
1. **String Conversion**: Convert to string, reverse, convert back with validation
2. **Mathematical**: Build reversed number using modulo and division
3. **Iterative Reversal**: Extract digits one by one, check bounds

## Time-Space Complexity
- **Approach 1 (String)**: O(log n) time, O(log n) space
- **Approach 2 (Mathematical)**: O(log n) time, O(1) space
- **Approach 3 (Iterative)**: O(log n) time, O(1) space

## Interview Tips
- Discuss 32-bit integer overflow constraints
- Mention optimization: check if next digit would cause overflow before adding
- Compare string vs. mathematical approaches
- Edge cases: negative numbers, single digit, powers of 10
