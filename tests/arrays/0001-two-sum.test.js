const twoSum = require('../../src/arrays/0001-two-sum');

describe('0001 - Two Sum', () => {
  test('should find two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
  });

  test('should return empty array if no solution exists', () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });

  test('should handle negative numbers', () => {
    const result = twoSum([-3, 4, 3, 90], 0);
    expect(result.length).toBe(2);
  });

  test('should work with duplicate numbers', () => {
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
  });
});
