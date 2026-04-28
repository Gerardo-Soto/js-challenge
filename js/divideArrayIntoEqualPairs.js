/**
 * @param {number[]} numbers
 * @return {boolean}
 */
var divideArray = function(numbers) {
    while (numbers.length != 0){
        console.log(numbers);
        // quit the number to find a pair
        let toFind = numbers.pop()
        const findPair = numbers.indexOf(toFind);
        console.log(toFind,findPair)
        // if there isn't a pair, exit with false
        if (findPair == -1) {
            return false
        } else {
            numbers.splice(findPair,1)
        }
        
    }
    return true;
};

const test = [1,2,3,4]
console.log(divideArray(test));
