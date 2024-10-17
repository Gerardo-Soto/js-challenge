/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // first: order whith the start number: 9, 95, 92, 955, 910
    //                                      1, 18, 167, 12
    let lengthNumbers = {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': [],
        '9': [],
    }

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const lengthNumber = element.toString();
        console.log(lengthNumber);
        
        lengthNumbers[lengthNumber[0]].push(nums[index])
    }
    
    console.log(lengthNumbers);
    
};

nums = [3,30,34,5,9]
largestNumber(nums);
// 97 975
// 55 554