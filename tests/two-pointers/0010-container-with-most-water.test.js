const { maxArea } = require('../../src/two-pointers/0010-container-with-most-water');

describe('0010 - Container With Most Water', () => {
  test('should find max area between two lines', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test('should handle small array', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  test('should work with equal heights', () => {
    expect(maxArea([5, 5])).toBe(5);
  });

  test('should work with large and small values', () => {
    expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17);
  });

  test('should handle array with zero', () => {
    expect(maxArea([0, 1, 2])).toBe(2);
  });
});
