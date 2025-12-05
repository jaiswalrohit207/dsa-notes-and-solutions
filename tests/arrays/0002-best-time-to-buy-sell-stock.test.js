const maxProfit = require('../../src/arrays/0002-best-time-to-buy-sell-stock');

describe('Best Time to Buy and Sell Stock', () => {
  test('basic case: [7, 1, 5, 3, 6, 4] should return 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('decreasing prices should return 0', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('single element should return 0', () => {
    expect(maxProfit([7])).toBe(0);
  });

  test('empty array should return 0', () => {
    expect(maxProfit([])).toBe(0);
  });
});
