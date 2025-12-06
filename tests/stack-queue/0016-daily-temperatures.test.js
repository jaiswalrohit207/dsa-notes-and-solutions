const { dailyTemperatures } = require('../../src/stack-queue/0016-daily-temperatures');

describe('0016 - Daily Temperatures', () => {
  test('should calculate days until warmer temp', () => {
    const temps = [73, 74, 75, 71, 69, 72, 76, 73];
    expect(dailyTemperatures(temps)).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  test('should handle all decreasing temperatures', () => {
    const temps = [30, 40, 50, 60];
    expect(dailyTemperatures(temps)).toEqual([1, 1, 1, 0]);
  });

  test('should handle single temperature', () => {
    expect(dailyTemperatures([1])).toEqual([0]);
  });

  test('should handle all same temperatures', () => {
    expect(dailyTemperatures([5, 5, 5])).toEqual([0, 0, 0]);
  });
});
