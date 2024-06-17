// How to run test: create a script in package.json and then, in the terminal, run > npm run-script testThis.


//import {describe, expect, test} from '@jest/globals'

const {describe, expect, test} = require('@jest/globals');

const checkSubarraySum = require('../js/continuousSubarraySum');

// twoSum
describe('1st test', () => {
    test('Example 1: Input: numbers = [23,2,4,6,7], k = 6 Output: true Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.', () => {
        expect(checkSubarraySum([23,2,4,6,7], 6)).toBe(true);
    });

    test('Example 2: Input: numbers = [23,2,6,4,7], k = 6 Output: true Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42. 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.', () => {
        expect(checkSubarraySum([23,2,6,4,7], 6)).toBe(true);
    });

    test('Example 3: Input: numbers = numbers = [23,2,6,4,7], k = 13 Output: false.', () => {
        expect(checkSubarraySum([23,2,6,4,7], 13)).toBe(false);
    });

    test('Example 4: Input: numbers = [42], k = 1 Output: false.', () => {
        expect(checkSubarraySum([42],1)).toBe(false);
    });
    
    test('Example 5: Input: numbers = [1,2,3,4,5,6,7,], k = 0 Output: false.', () => {
        expect(checkSubarraySum([1,2,3,4,5,6,7,],0)).toBe(false);
    });

    test('Example 6: Input: numbers = [0,0,0,0,0,0,0], k = 10 Output: false.', () => {
        expect(checkSubarraySum([0,0,0,0,0,0,0],10)).toBe(true);
    });
   
});
