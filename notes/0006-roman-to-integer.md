# Problem 0006: Roman to Integer

## Problem Summary
Convert a Roman numeral string to its corresponding integer value.

## Key Concepts
- **Roman Numeral Rules**: I=1, V=5, X=10, L=50, C=100, D=500, M=1000
- **Subtractive Cases**: IV=4, IX=9, XL=40, XC=90, CD=400, CM=900
- **Right-to-Left Parsing**: Process string from right to left
- **Value Addition**: Add current if >= previous, else subtract

## Solution Approaches
1. **HashMap + Right-to-Left**: Store values in map, iterate right to left
2. **Switch Statement**: Use switch for character lookups
3. **Conditional Logic**: Direct if-else for each character

## Time-Space Complexity
- **All Approaches**: O(n) time where n is string length, O(1) space (fixed symbols)

## Interview Tips
- Explain subtractive notation (e.g., IV before V)
- Handle edge cases: single character, longest strings
- Mention right-to-left vs left-to-right approaches
- Discuss validation needs for invalid Roman numerals
