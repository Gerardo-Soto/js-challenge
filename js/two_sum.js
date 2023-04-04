function getData(){
    // getting data from the form:
    const list_get_numbers = document.getElementById("numbers").value.split(',');
    const target = document.getElementById("target").value;
    console.log(list_get_numbers, target);

    twoSum(list_get_numbers, target)
}

function twoSum(list_of_numbers, target){
    /*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
    */

    // obj => object to save the values checked for the sum.
    let obj = {}
    let answer;

    for (let i=0; i < list_of_numbers.length; i++) {
        //console.log(obj);
        if (obj.hasOwnProperty(target - list_of_numbers[i])) {
            // https://masteringjs.io/tutorials/fundamentals/hasownproperty
            answer = [obj[target - list_of_numbers[i]] ,i];
            ////////////////document.getElementById("answer").value = answer;

            return answer;
        };
        obj[list_of_numbers[i]] = i;
    };
    // Return answer not found:
    //document.getElementById("answer").value = "No result was found.";
    return;
    
    /*
    runtime: 64 ms, faster than 98.94% of JavaScript online submissions fot Two Sun.
    Memory usage:  43.1 MB, less than 12.05% of JavaScript online submissions. 
    */
};

const l = [1,2];
const t = 3;
const answer = twoSum(l,t);
console.log(answer);
console.log(typeof(answer));
console.log(answer[1]);

module.exports = twoSum;
