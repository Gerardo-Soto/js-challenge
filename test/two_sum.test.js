//import {describe, expect, test} from '@jest/globals'

const {describe, expect, test} = require('@jest/globals');

const twoSum = require('../js/two_sum');

// twoSum
describe('1st test', () => {
    test('adds 1 + 2 to equal target 3', () => {
        expect(twoSum([1,2], 3)).toStrictEqual([0,1])
    });

    test('adds 1, 2, 5, 9 to equal target 11', () => {
        expect(twoSum([1,2,5,9], 11)).toStrictEqual([1,3])
    });

    test('adds 1, 2, 14, 8, 3 to equal target 11', () => {
        expect(twoSum([1,2,14,8,3], 11)).toStrictEqual([3,4])
    });

    test('adds 1, 2, 5 NOT to equal target 4', () => {
        expect(twoSum([1,2,14,8,3], 11)).not.toStrictEqual([1,5])
    });

});
