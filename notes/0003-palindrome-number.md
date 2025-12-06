# Problem 0003: Palindrome Number

## Problem Summary
Determine if an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

## Key Concepts
- **String/Mathematical Approach**: Convert to string and check, or reverse numerically
- **Negative Numbers**: Negative numbers are not palindromes (e.g., -121)
- **Modulo Operation**: Extract digits from right to left using modulo and division

## Solution Approaches
1. **String Conversion**: Convert number to string and compare with reverse
2. **Reverse Number**: Mathematically reverse the number and compare
3. **Two Pointer**: Use string representation with left and right pointers

## Time-Space Complexity
- **Approach 1 (String)**: O(log n) time, O(log n) space
- **Approach 2 (Reverse)**: O(log n) time, O(1) space
- **Approach 3 (Two Pointer)**: O(log n) time, O(log n) space

## Interview Tips
- Discuss trade-offs between string and mathematical approaches
- Handle edge cases: negatives, single digits, zeros
- Explain why negative numbers can't be palindromes
- Mention space optimization with reversal approach
