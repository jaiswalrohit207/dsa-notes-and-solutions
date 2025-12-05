# DSA Daily (JavaScript)

Daily DSA in JavaScript: one problem a day with clear explanations, complexity, and tests.

## Goals
- ✅ Consistency over intensity (1 problem/day).
- ✅ Clean, tested solutions.
- ✅ Revisit + optimize when I learn better patterns.

## How I log
Each day I add:
1. Solution file in `src/<topic>/<id>-<slug>.js`
2. Test in `tests/<topic>/<id>-<slug>.test.js`
3. Notes in `notes/<id>-<slug>.md`
4. Update **Progress** table below.

## SLUG  means URL-friendly / filename-friendly version of the problem title.

## Progress
| Day | ID | Problem | Topic | Difficulty | Notes | Code | Test |
|-----|----|---------|-------|------------|-------|------|------|
| 001 | 0001 | Two Sum | Arrays | Easy | [Notes](notes/0001-two-sum.md) | [Code](src/arrays/0001-two-sum.js) | [Test](tests/arrays/0001-two-sum.test.js) |
| 002 | 0002 | Best Time to Buy/Sell | Arrays | Easy | [Notes](notes/0002-best-time-to-buy-sell-stock.md) | [Code](src/arrays/0002-best-time-to-buy-sell-stock.js) | [Test](tests/arrays/0002-best-time-to-buy-sell-stock.test.js) |
| 003 | 0003 | Contains Duplicate | Arrays | Easy | [Notes](notes/0003-contains-duplicate.md) | [Code](src/arrays/0003-contains-duplicate.js) | [Test](tests/arrays/0003-contains-duplicate.test.js) |
| 004 | 0004 | Valid Parentheses | Strings | Easy | [Notes](notes/0004-valid-parentheses.md) | [Code](src/strings/0004-valid-parentheses.js) | [Test](tests/strings/0004-valid-parentheses.test.js) |
| 005 | 0005 | Reverse String | Strings | Easy | [Notes](notes/0005-reverse-string.md) | [Code](src/strings/0005-reverse-string.js) | [Test](tests/strings/0005-reverse-string.test.js) |
| 006 | 0006 | Valid Anagram | Hash Map | Easy | [Notes](notes/0006-valid-anagram.md) | [Code](src/hash-map/0006-valid-anagram.js) | [Test](tests/hash-map/0006-valid-anagram.test.js) |
| 007 | 0007 | Two Sum (Sorted) | Two Pointers | Easy | [Notes](notes/0007-two-sum-sorted.md) | [Code](src/two-pointers/0007-two-sum-sorted.js) | [Test](tests/two-pointers/0007-two-sum-sorted.test.js) |
| 008 | 0008 | Majority Element | Arrays | Easy | [Notes](notes/0008-majority-element.md) | [Code](src/arrays/0008-majority-element.js) | [Test](tests/arrays/0008-majority-element.test.js) |
| 009 | 0009 | Group Anagrams | Hash Map | Medium | [Notes](notes/0009-group-anagrams.md) | [Code](src/hash-map/0009-group-anagrams.js) | [Test](tests/hash-map/0009-group-anagrams.test.js) |
| 010 | 0010 | Container With Most Water | Two Pointers | Medium | [Notes](notes/0010-container-with-most-water.md) | [Code](src/two-pointers/0010-container-with-most-water.js) | [Test](tests/two-pointers/0010-container-with-most-water.test.js) |
| 011 | 0011 | Reverse Linked List | Linked List | Easy | [Notes](notes/0011-reverse-linked-list.md) | [Code](src/linked-list/0011-reverse-linked-list.js) | [Test](tests/linked-list/0011-reverse-linked-list.test.js) |
| 012 | 0012 | Merge Two Sorted Lists | Linked List | Easy | [Notes](notes/0012-merge-sorted-lists.md) | [Code](src/linked-list/0012-merge-sorted-lists.js) | [Test](tests/linked-list/0012-merge-sorted-lists.test.js) |
| 013 | 0013 | Detect Cycle in Linked List | Linked List | Easy | [Notes](notes/0013-detect-cycle.md) | [Code](src/linked-list/0013-detect-cycle.js) | [Test](tests/linked-list/0013-detect-cycle.test.js) |
| 014 | 0014 | Min Stack | Stack / Queue | Easy | [Notes](notes/0014-min-stack.md) | [Code](src/stack-queue/0014-min-stack.js) | [Test](tests/stack-queue/0014-min-stack.test.js) |
| 015 | 0015 | Implement Queue Using Stacks | Stack / Queue | Medium | [Notes](notes/0015-implement-queue-using-stacks.md) | [Code](src/stack-queue/0015-implement-queue-using-stacks.js) | [Test](tests/stack-queue/0015-implement-queue-using-stacks.test.js) |
| 016 | 0016 | Daily Temperatures | Stack / Queue | Medium | [Notes](notes/0016-daily-temperatures.md) | [Code](src/stack-queue/0016-daily-temperatures.js) | [Test](tests/stack-queue/0016-daily-temperatures.test.js) |


## Topics Checklist
- [x] Arrays
- [x] Strings
- [x] Hash Map
- [x] Two Pointers
- [ ] Sliding Window
- [ x Linked List
- [ x Stack / Queue
- [ ] Trees / BST
- [ ] Heaps
- [ ] Graphs
- [ ] DP

## How to run
```bash
npm test    # run all tests
npm run fmt # format
npm run lint
