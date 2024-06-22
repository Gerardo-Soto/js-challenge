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
    let sums = (2 ** numbers.length) - 1;
    console.log(sums);
    let bites = 0;//(sums).toString(2);
    
    let completed = false;

    while (!completed){
        // for to create the sums array with the numbers in numbers
        



        // for to check if the sums array is completed
        let count = 0;
        for (let index = 1; index <= n ; index++) {
            if (sumsArray[index] == index){
                completed = true;
            } else {
                // create the num
                sumsArray[index] = index;
                numbersAdded += 1;
            }
        }
    }
    return numbersAdded;


    for (let index = 1; index <= sums; index++) {
        let sum = 0;
        bites = (index).toString(2);
        bites = bites.padStart(numbers.length,'0')
        for (let bite = 0; bite < bites.length; bite++) {
            if (bites[bite] == 1) {
                if (sum + numbers[bite] > n) continue;

                sum += numbers[bite];
            };
        };
        console.log(`${(bites)} sum: ${sum}`);
        theList.add(sum);

        
        //sums -= 1;
    }
    console.log(theList, theList.size);

    for (let index = 1; index <= theList.size; index++) {
        if (!theList.has(index)) {
            console.log(`theList don't have: ${index}`);
            theList.add(index);
            numbersAdded += 1;
        };
        
    }
    console.log(theList, theList.size);

    return numbersAdded;
};

let numbers = [1, 5, 10]
let n = 20;

const sol = minPatches(numbers, n);
console.log(sol);