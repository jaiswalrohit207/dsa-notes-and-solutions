const { twoSum } = require('../../src/two-pointers/0007-two-sum-sorted');

describe('0007 - Two Sum (Sorted)', () => {
  test('should find two indices that sum to target', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([1, 2]);
  });

  test('should return [1, 2] for simple case', () => {
    const result = twoSum([2, 3, 4], 6);
    expect(result).toEqual([1, 2]);
  });

  test('should handle edge case with target at ends', () => {
    const result = twoSum([1, 2, 3, 9], 10);
    expect(result).toEqual([1, 4]);
  });

  test('should work with negative numbers', () => {
    const result = twoSum([-1, 0, 1, 2, 3], 2);
    expect(result).toEqual([1, 5]);
  });

  test('should handle large numbers', () => {
    const result = twoSum([1, 2, 3, 1000], 1003);
    expect(result).toEqual([1, 4]);
  });
});
