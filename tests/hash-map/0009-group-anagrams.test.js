const { groupAnagrams } = require('../../src/hash-map/0009-group-anagrams');

describe('0009 - Group Anagrams', () => {
  test('should group anagrams together', () => {
    const result = groupAnagrams(['eat', 'tea', 'ate', 'tan', 'nat', 'bat']);
    // Sort each group and the result to compare
    const sorted = result.map(group => [...group].sort()).sort((a, b) => a[0].localeCompare(b[0]));
    expect(sorted.length).toBe(3);
  });

  test('should handle single word', () => {
    const result = groupAnagrams(['word']);
    expect(result).toEqual([['word']]);
  });

  test('should handle empty array', () => {
    const result = groupAnagrams([]);
    expect(result).toEqual([]);
  });

  test('should handle words with same characters', () => {
    const result = groupAnagrams(['abc', 'bca', 'cab']);
    expect(result.length).toBe(1);
    expect(result[0].length).toBe(3);
  });

  test('should keep words not forming anagrams separate', () => {
    const result = groupAnagrams(['ab', 'cd', 'ba', 'dc']);
    expect(result.length).toBe(2);
  });
});
