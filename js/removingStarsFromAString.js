/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    // we use a stack to store the new values
    let sol = []
    for (let index = 0; index < s.length; index++) {
        
        // if an asterisk is found, we remove the last element from the stack, otherwise, we store the element in the stack.
        if (s[index] == '*') {
            sol.pop();
        } else {
            sol.push(s[index]);
        };
    };

    // Convert the array to a text string and replace all commas with an empty string to get the final result without commas.
    return sol.toString().replaceAll(',', '');
};

//let test = 'leet*cod*e';
//test = 'erase*****';

//removeStars(test);




function getFormRemovingStarsData() {
    const stringWithStars = document.getElementById("string-with-stars").value;
    const outputString = document.getElementById("output-string");

    outputString.value = removeStars(stringWithStars);
};


const form_data = document.getElementById('form-removing-stars-data');

form_data.addEventListener('submit', (event) => {
    event.preventDefault();
});
