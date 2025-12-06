# Problem 0010: Median of Two Sorted Arrays

## Problem Summary
Find the median of two sorted arrays with O(log(min(n,m))) complexity.

## Key Concepts
- **Binary Search**: Search on the smaller array
- **Partition**: Divide arrays such that left/right halves have equal size
- **Edge Cases**: Odd/even total length, overlapping/non-overlapping medians

## Solution Approaches
1. **Binary Search**: Most efficient, O(log(min(n,m)))
2. **Merge**: Simple merge sort-like approach, O(n+m)
3. **Simplified**: Direct partition without binary search

## Time-Space Complexity
- **Binary Search**: O(log(min(n,m))) time, O(1) space
- **Merge**: O(n+m) time, O(n+m) space

## Interview Tips
- Explain binary search partition logic
- Handle even vs odd total length
- Discuss why O(log(min(n,m))) is possible
- Edge cases: empty arrays, single element
