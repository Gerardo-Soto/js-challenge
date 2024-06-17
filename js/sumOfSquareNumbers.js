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

//var to html
let firstSquareForm = 0;
let secondSquareForm = 0;

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    // if the number c is a perfect square, return true
    if (Number.isInteger(Math.sqrt(c))) {
        return true;
    } else {
        /**
         * if the square root of C is decimal, no other larger number 
         * can be represented for the sum of squares, 
         * so we start by subtracting 1 from the square root of C to find 
         * the other square by subtracting the square of the square root 
         * from C and verify if the result is a square root without decimals.
         */
        const firstSquare = Math.floor(Math.sqrt(c));
        const secondSquare = c - (firstSquare * firstSquare);

        let newFirstSquare = firstSquare;

        //console.log(`FS: ${firstSquare}, SS: ${secondSquare}`);
        if (Number.isInteger(Math.sqrt(secondSquare))) {
            //console.log(`FS: ${firstSquare}, SS: ${secondSquare}`);
            firstSquareForm = firstSquare;
            secondSquareForm = secondSquare;
            return true;
        } else {
            for (let square = firstSquare; square >= 0; square--) {
                // start by subtracting 1 from the square root of C to find 
                newFirstSquare -= 1;
                const newSecondSquare = Math.sqrt(c - (newFirstSquare * newFirstSquare));
                //console.log(`FS: ${newFirstSquare}, SS: ${newSecondSquare}`);

                // verify if the result is a square root without decimals.
                if (Number.isInteger(newSecondSquare)) {
                    firstSquareForm = firstSquare;
                    secondSquareForm = secondSquare;
            
                    //console.log(`FS: ${newFirstSquare}, SS: ${newSecondSquare}`);
                    return true;
                };
            };
        };

        return false;
    };
};

/*
let c = 2468;
const solve = judgeSquareSum(c);
console.log(solve);
*/


module.exports = judgeSquareSum;