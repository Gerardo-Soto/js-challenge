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
    // 1 + 1 = 2
    // 2 + 1 = 3
    // 4 + 1 = 5    6,7 = 4+2 4+2+1
    // 8 + 1 = 9
    // n**2
    let missing = 1;
    let patches = 0;
    let index = 0;

    while (missing <= n) {
        if (index < numbers.length && numbers[index] <= missing) {
            missing += numbers[index];
            index += 1;
        } else {
            missing += missing;
            patches += 1;
        }
    }
    return patches;
};

let numbers = [1, 5, 10]
let n = 20;

const sol = minPatches(numbers, n);
console.log(sol);