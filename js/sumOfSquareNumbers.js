/*

633. Sum of Square Numbers

Given a non-negative integer c, decide whether there're two integers a and b such that a^2 + b^2 = c.
 

Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:

Input: c = 3
Output: false
 

Constraints:

0 <= c <= 2^31 - 1
*/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if (Number.isInteger(Math.sqrt(c))) {
        return true;
    } else {
        const firstSquare = Math.floor(Math.sqrt(c));
        const secondSquare = c - (firstSquare * firstSquare);

        let newFirstSquare = firstSquare;

        console.log(`FS: ${firstSquare}, SS: ${secondSquare}`);
        if (Number.isInteger(Math.sqrt(secondSquare))) {
            console.log(`FS: ${firstSquare}, SS: ${secondSquare}`);
            return true;
        } else {
            for (let square = firstSquare; square >= 0; square--) {
                newFirstSquare -= 1;
                const newSecondSquare = Math.sqrt(c - (newFirstSquare * newFirstSquare));
                console.log(`FS: ${newFirstSquare}, SS: ${newSecondSquare}`);
                if (Number.isInteger(newSecondSquare)) {
                    console.log(`FS: ${newFirstSquare}, SS: ${newSecondSquare}`);
                    return true;
                };
            };
        };

        return false;
    };
};

let c = 2468;
c= 1000;// true
c=0;//true
c=2468;//true
c=1234;//true
c=4607;// false
c=5000;// true
c=10050;//false
c=10414;//false
c=674045;//true
c=12468;//false
const solve = judgeSquareSum(c);
console.log(solve);

// 3  5  == 34