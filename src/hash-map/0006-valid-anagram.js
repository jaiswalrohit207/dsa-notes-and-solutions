/**
 * Problem: Valid Anagram
 * Difficulty: Easy
 * Topic: Hash Map
 * Time: O(n)
 * Space: O(1) - max 26 chars
 *
 * Approach: Count char frequencies in both strings
 */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (const char of s) count[char] = (count[char] || 0) + 1;
  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}

module.exports = isAnagram;
