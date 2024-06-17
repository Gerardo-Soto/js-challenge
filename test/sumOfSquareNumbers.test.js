const {describe, expect, test} = require('@jest/globals');

const judgeSquareSum = require('../js/sumOfSquareNumbers');

describe('1st test', () => {
    test('should return true when c is a perfect square', () => {
        expect(judgeSquareSum(16)).toBe(true); // 16 = 4^2 + 0^2
    });

    test('should return true when c can be expressed as the sum of two squares', () => {
        expect(judgeSquareSum(5)).toBe(true); // 5 = 2^2 + 1^2
    });

    test('should return true when c can be expressed as the sum of two squares', () => {
        expect(judgeSquareSum(1000)).toBe(true); // 5 = 2^2 + 1^2
    });

    test('should return false when c cannot be expressed as the sum of two squares', () => {
        expect(judgeSquareSum(3)).toBe(false);
    });

    test('should return true for c = 1000', () => {
        expect(judgeSquareSum(1000)).toBe(true);
    });

    test('should return true for c = 0', () => {
        expect(judgeSquareSum(0)).toBe(true);
    });

    test('should return true for c = 2468', () => {
        expect(judgeSquareSum(2468)).toBe(true);
    });

    test('should return true for c = 1234', () => {
        expect(judgeSquareSum(1234)).toBe(true);
    });

    test('should return false for c = 4607', () => {
        expect(judgeSquareSum(4607)).toBe(false);
    });

    test('should return true for c = 5000', () => {
        expect(judgeSquareSum(5000)).toBe(true);
    });

    test('should return false for c = 10050', () => {
        expect(judgeSquareSum(10050)).toBe(false);
    });

    test('should return false for c = 10414', () => {
        expect(judgeSquareSum(10414)).toBe(false);
    });

    test('should return true for c = 674045', () => {
        expect(judgeSquareSum(674045)).toBe(true);
    });

    test('should return false for c = 12468', () => {
        expect(judgeSquareSum(12468)).toBe(false);
    });

});
