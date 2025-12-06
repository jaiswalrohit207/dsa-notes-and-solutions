const isValid = require('../../src/strings/0004-valid-parentheses');

describe('0004 - Valid Parentheses', () => {
  test('should return true for valid parentheses', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('([{}])')).toBe(true);
  });

  test('should return false for invalid parentheses', () => {
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{[]')).toBe(false);
  });

  test('should handle empty string', () => {
    expect(isValid('')).toBe(true);
  });
});
