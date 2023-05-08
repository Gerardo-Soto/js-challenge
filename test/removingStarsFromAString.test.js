const { expect } = require('@jest/globals');
const removeStars = require('../js/removingStarsFromAString');


// unit test 1:
test('removing a simple star', () => {
    const stringWithStars = 'my st*rs';
    const expected = 'my srs';

    const result = removeStars(stringWithStars);

    expect(result).toBe(expected);
});

// unit test 2: test with a star at the end of the string:
test('removing a star at the end of the string.', () => {
    const stringWithStars = 'this star is at the en*';
    const expected = 'this star is at the e';

    const result = removeStars(stringWithStars);

    expect(result).toBe(expected);
});

// unit test 3: test with stars:
test('removing stars .', () => {
    const stringWithStars = '*his str*ng ha** man* st**s';
    const expected = 'his stng  ma s';

    const result = removeStars(stringWithStars);

    expect(result).toBe(expected);
});

// docker start js-challenge-leetcode