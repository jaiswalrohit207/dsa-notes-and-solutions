const isAnagram = require('../../src/hash-map/0006-valid-anagram');

describe('0006 - Valid Anagram', () => {
  test('should return true for valid anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  test('should return false for non-anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  test('should handle different lengths', () => {
    expect(isAnagram('a', 'ab')).toBe(false);
  });

  test('should handle empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });
});
