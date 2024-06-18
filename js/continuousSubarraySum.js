/**Given an integer array numbers and an integer k, return true if numbers has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 

Example 1:

Input: numbers = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
Example 2:

Input: numbers = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
Example 3:

Input: numbers = [23,2,6,4,7], k = 13
Output: false */

/** O = O(n^2) */
/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(numbers, k) {
    //const firstIndex = 0;
    //const secondIndex = 1;
    //let windows = 1;
    //let window = [];
    
    if (numbers.length < 2) {
        return false;
    }

    let subarraySum;

    for (let firstIndex = 0; firstIndex < numbers.length - 1; firstIndex++) {
        // create new array:
        subarraySum = numbers[firstIndex];
        
        //window.push(numbers[firstIndex])
        for (let secondIndex = firstIndex + 1; secondIndex < numbers.length; secondIndex++) {
            
            //window.push(numbers[secondIndex]);
            
            //console.log(``);
            //windows += 1;
            subarraySum = subarraySum + numbers[secondIndex];
            //console.log(`window (${windows}): ${window} \tsubarraySum: ${subarraySum}  / ${k} = ${subarraySum/k}`);
            //console.log(`subarraySum: ${subarraySum}  / ${k} = ${subarraySum/k}`);
            if (Number.isInteger(subarraySum / k)) {
                console.log(`${subarraySum} / ${k}`);
                return true
            }    
        }
        
        // create new window
        //window = [];
        
    };
    
    return false;
};

const k = 2000000000;


console.time('checkSubarraySum')
console.log(numbers.length);
const solution = checkSubarraySum(numbers, k);
console.log(solution);
console.timeEnd('checkSubarraySum');


//export to test:
module.exports = checkSubarraySum;