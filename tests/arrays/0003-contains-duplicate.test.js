const containsDuplicate = require('../../src/arrays/0003-contains-duplicate');

describe('0003 - Contains Duplicate', () => {
  test('should return true when duplicates exist', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test('should return false when no duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test('should handle empty array', () => {
    expect(containsDuplicate([])).toBe(false);
  });

  test('should handle single element', () => {
    expect(containsDuplicate([1])).toBe(false);
  });
});
