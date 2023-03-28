function twoSum(){
    const list_of_numbers = document.getElementById("numbers");
    const target = document.getElementById("target");
    console.log(list_of_numbers, target);
}

function twoSum(){
    /*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
    */
    // getting data from the form:
    let list_of_numbers_obtained = document.getElementById("numbers").value;
    const target = document.getElementById("target").value;
    //console.log(list_of_numbers_obtained, target);

    // Cleaning strings input:
    let list_of_numbers = [];
    if (list_of_numbers_obtained.indexOf(',') > -1) {
        list_of_numbers = list_of_numbers_obtained.split(",").map(Number);
        console.log("comma");
    } else {
        list_of_numbers = list_of_numbers_obtained.split(" ").map(Number);
        console.log("space");
    }
    
    console.log(list_of_numbers);
    // obj => object to save the values checked for the sum.
    let obj = {}
    let answer;

    for (let i=0; i < list_of_numbers.length; i++) {
        //console.log(obj);
        if (obj.hasOwnProperty(target - list_of_numbers[i])) {
            // https://masteringjs.io/tutorials/fundamentals/hasownproperty
            answer = [obj[target - list_of_numbers[i]] ,i];
            document.getElementById("answer").value = answer;
            return;
        };
        obj[list_of_numbers[i]] = i;
    };
    // Return answer not found:
    document.getElementById("answer").value = "No result was found.";
    return;
    
    /*
    runtime: 64 ms, faster than 98.94% of JavaScript online submissions fot Two Sun.
    Memory usage:  43.1 MB, less than 12.05% of JavaScript online submissions. 
    */
};