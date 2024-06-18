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
        firstSquareForm = Math.sqrt(c);
        secondSquareForm = 0;
        console.log('out: 1');
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

        /* if the remainder of the first square to the number C is 
        a perfect square, then we have already found the 2 perfect 
        squares that added together give C.
        */
        if (Number.isInteger(Math.sqrt(secondSquare))) {
            console.log(`FS: ${firstSquare}, SS: ${secondSquare}`);
            firstSquareForm = firstSquare;
            secondSquareForm = Math.sqrt(secondSquare);
            return true;
        } else {
            for (let square = firstSquare; square >= 0; square--) {
                // start by subtracting 1 from the square root of C to find 
                newFirstSquare -= 1;
                const newSecondSquare = Math.sqrt(c - (newFirstSquare * newFirstSquare));

                // verify if the result is a square root without decimals.
                if (Number.isInteger(newSecondSquare)) {
                    console.log(`FS: ${newFirstSquare}, SS: ${newSecondSquare}`);
                    firstSquareForm = newFirstSquare;
                    secondSquareForm = newSecondSquare;
            
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

// test
//module.exports = judgeSquareSum;

const form = document.querySelector('#form-data');
form.addEventListener('submit', e => {
    // don't send form native
    e.preventDefault();
});

function squareNumbersForm() {
    let numberForm = parseInt(document.querySelector('#your-number').value);
    let isSolved = document.querySelector('#isSolved');
    let firstAnswerForm = document.querySelector('#firstAnswer');
    let secondAnswerForm = document.querySelector('#secondAnswer');
    
    const answer = judgeSquareSum(numberForm);
    isSolved.value = answer;
    if (answer) {
        firstAnswerForm.value = firstSquareForm;
        secondAnswerForm.value = secondSquareForm;
        
    } else {
        firstAnswerForm.value = 'There is not an answer.';
        secondAnswerForm.value = 'There is not an answer.';
        
    }
}