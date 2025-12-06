const twoSumSorted = require('../../src/two-pointers/0007-two-sum-sorted');

describe('0007 - Two Sum Sorted', () => {
  test('should find two indices', () => {
    const result = twoSumSorted([2,7,11,15], 9);
    expect(result).toEqual([1, 2]);
  });
});

const maxArea = require('../../src/two-pointers/0010-container-with-most-water');

describe('0010 - Container With Most Water', () => {
  test('should calculate max area', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
  });
});
