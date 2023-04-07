const {describe, expect, test} = require('@jest/globals');

var numRescueBoats = require('./../js/boatsToSavePeople');

console.log('func::::::::::'+numRescueBoats);

describe('Boats used', () => {
    test('input: people = [1,2], limit = 3', () => {
        expect(numRescueBoats([1,2], 3)).toStrictEqual(1);
    });

    
});