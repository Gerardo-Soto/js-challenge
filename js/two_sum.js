function getData(){
    // getting data from the form:
    const list_get_numbers = document.getElementById("numbers").value.split(',');
    const target = document.getElementById("target").value;
    console.log(list_get_numbers, target);

    twoSum(list_get_numbers, target);
}

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(list_of_numbers, target){

    // obj => object to save the values checked for the sum.
    let obj = {}
    let answer;

    for (let i=0; i < list_of_numbers.length; i++) {
        /*
        when going through the list of numbers, 
        we search if there is a number that by subtracting 
        the target with the numbers in the list already exists in the object.
        if not, we store the value in the object and move on to the next value in the list.
        */

        // https://masteringjs.io/tutorials/fundamentals/hasownproperty
        if (obj.hasOwnProperty(target - list_of_numbers[i])) {
            // add the two indexes found that match the condition 
            answer = [obj[target - list_of_numbers[i]] , i];
            document.getElementById("answer").value = answer;

            return;
        };
        obj[list_of_numbers[i]] = i;
    };
    // Return a message if a result wasn't found:
    document.getElementById("answer").value = "There are not two indexes that match the condition.";
    return;
};

/*
runtime: 64 ms, faster than 98.94% of JavaScript online submissions fot Two Sun.
Memory usage:  43.1 MB, less than 12.05% of JavaScript online submissions. 
*/

/*
const l = [1,2];
const t = 3;
const answer = twoSum(l,t);
console.log(answer);
console.log(typeof(answer));
console.log(answer[1]);*/

const form_data = document.getElementById('form-data');

form_data.addEventListener('submit', (event) => {
    event.preventDefault();
});

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
});


//module.exports = twoSum;
