/**
 * Given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] inclusive can be formed by the sum of some elements in the array.

Return the minimum number of patches required.

 

Example 1:

Input: numbers = [1,3], n = 6
Output: 1
Explanation:
Combinations of numbers are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to numbers, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch.
Example 2:

Input: numbers = [1,5,10], n = 20
Output: 2
Explanation: The two patches can be [2, 4].
Example 3:

Input: numbers = [1,2,2], n = 5
Output: 0
 

Constraints:

1 <= numbers.length <= 1000
1 <= numbers[i] <= 104
numbers is sorted in ascending order.
1 <= n <= 231 - 1
 */

/**
 * @param {number[]} numbers
 * @param {number} n
 * @return {number}
 */
var minPatches = function(numbers, n) {
    let numbersAdded = 0;
    console.log(numbers);
    //show all sums
    let bites = 0;//(sums).toString(2);
    //console.log(bites);

    const theList = [];

    for (let index = 0; index <= numbers.length; index++) {
        if (numbers[index] > n) continue;

        if (numbers[index] != 1) {
            theList.add(1);
            numbersAdded += 1;
            theList[0] = 1;
        };

        let complete = false;
        while(!complete){
            
        }

        
        //sums -= 1;
    }
    console.log(theList, theList.size);

    
    return numbersAdded;
};

let numbers = [1, 5, 10]
let n = 20;

const sol = minPatches(numbers, n);
console.log(sol);