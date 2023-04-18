const { expect } = require('@jest/globals');
const maxValueOfCoins = require('../js/maximumValueOfKCoinsFromPiles');

// unit test 1: Verifies that the result is as expected for a specific test case
test('maxValueOfCoins returns correct result for a specific test case', () => {
  const piles = [[2, 4, 1, 5], [3, 1, 6, 2], [7, 2, 9, 8]]; // Piles with different amounts of coins
  const k = 8; // Maximum number of coins to select
  const expected = 38; // Maximum expected value
  
  const result = maxValueOfCoins(piles, k);
  
  expect(result).toBe(expected);
});

// unit test 2: Verify that the result is a number
test('maxValueOfCoins returns a number', () => {
  const piles = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // Piles with different amounts of coins
  const k = 5; // maximum number of coins to select
  
  const result = maxValueOfCoins(piles, k);
  
  expect(typeof result).toBe('number');
});

// unit test 3: check the result will be the correct
test('Example 1 from leetcode', () => {
    const piles = [[1,100,3],[7,8,9]]; // Piles with different amounts of coins
    const k = 2; // maximum number of coins to select
    const expected = 101; //Maximum expected value
    
    const result = maxValueOfCoins(piles, k);

    expect(result).toBe(expected);
});

