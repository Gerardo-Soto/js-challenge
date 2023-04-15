/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let validateStack = [];
    let indexPopped = 0;

    pushed.forEach( item => {
        validateStack.push(item);
        console.log(validateStack);

        while (validateStack.length > 0 && validateStack[validateStack.length - 1] === popped[indexPopped]) {
            
            validateStack.pop();
            indexPopped++;
        };
    })
    
    return validateStack.length == 0;
};

let pushed = [1,2,3,4,5];
let popped = [4,3,5,1,2];

console.log(`Returned: ${validateStackSequences(pushed, popped)}`);