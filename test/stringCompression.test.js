const {describe, expect, test} = require('@jest/globals');

const compress = require('../js/stringCompression');

// twoSum
describe('Compress strings', () => {
    test('input: ["a","a","b","b","c","c","c"]', () => {
        expect(compress(["a","a","b","b","c","c","c"])).toStrictEqual(["a","r2","b","r2","c","r3"]);
    });

    test('input: ["a"]', () => {
        expect(compress(["a"])).toStrictEqual(["a"]);
    });

    test('input: ["a","b","b","b","b","b","b","b","b","b","b","b","b"]', () => {
        expect(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])).toStrictEqual(["a","b","r1","r2"]);
    });

});
