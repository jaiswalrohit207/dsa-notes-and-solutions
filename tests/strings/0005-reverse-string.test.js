const { reverseString } = require('../../src/strings/0005-reverse-string');

describe('0005 - Reverse String', () => {
  test('should reverse a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should reverse single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('should reverse empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should reverse string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('should reverse string with special characters', () => {
    expect(reverseString('a!b@c#')).toBe('#c@b!a');
  });
});
