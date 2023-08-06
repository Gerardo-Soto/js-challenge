const {describe, expect, test} = require('@jest/globals');

var calculateDaysToPayDebts = require('../js/calculateDaysToPayDebts')


test('returns an empty array for an empty input array', () => {
    const debts = [];
    const result = calculateDaysToPayDebts(debts);
    expect(result).toEqual([]);
});


test('returns an array of zeroes for an input array with negative values', () => {
    const debts = [-1, -2, -3];
    const result = calculateDaysToPayDebts(debts);
    expect(result).toEqual([0, 0, 0]);
});


test('returns an array of zeroes for an input array with zero values', () => {
    const debts = [0, 0, 0];
    const result = calculateDaysToPayDebts(debts);
    expect(result).toEqual([0, 0, 0]);
});

test('returns the correct array of calculated days for an input array with positive integer values', () => {
    const debts = [1, 2, 4, 8, 16];
    const result = calculateDaysToPayDebts(debts);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});


test('returns the correct array of calculated days for an input array with positive decimal values', () => {
    const debts = [1.5, 2.7, 3.2];
    const result = calculateDaysToPayDebts(debts);
    expect(result).toEqual([2, 3, 3]);
});
