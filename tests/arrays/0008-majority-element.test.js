const majorityElement = require('../../src/arrays/0008-majority-element');

describe('0008 - Majority Element', () => {
  test('should find the majority element', () => {
    expect(majorityElement([3,2,3])).toBe(3);
    expect(majorityElement([2,2,1,1,1,2,2])).toBe(2);
  });

  test('should handle single element', () => {
    expect(majorityElement([1])).toBe(1);
  });
});
