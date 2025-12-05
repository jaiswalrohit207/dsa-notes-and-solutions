/**
 * Problem: Group Anagrams
 * Difficulty: Medium
 * Topic: Hash Map
 * Time: O(n * k log k) - n strings, k chars, sorting
 * Space: O(n * k)
 *
 * Approach: Sort chars in each word, use sorted string as key
 */

function groupAnagrams(strs) {
  const map = {};
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map[sorted]) map[sorted] = [];
    map[sorted].push(str);
  }
  return Object.values(map);
}

module.exports = groupAnagrams;
