/**
 * Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.
 */

// npm i -D object-sizeof
//const sizeof = require('object-sizeof');
//var sizeof = require('sizeof'); 


/**
 * @param {character[]} chars
 * @return {string} sting compress 
 */
var compress = chars => {
    
    let compressString = []; // An empty array to store the compressed characters
    
    let count = 1; // A counter to track the number of consecutive equal characters
    let iterate = 0; // An index to iterate through the input array
    
    for (let i = 0; i < chars.length; i++) { 
        // If the current character is equal to the next one, increase the counter
        if (chars[i] === chars[i + 1]) { 
            count++; 
        }
        // If there's only one consecutive character, save it in the input array uncompressed
        else if (count === 1) { 
            chars[iterate++] = chars[i];
        }
        // If there are more than one consecutive characters but less than 10, save the original character in the input array
        else if (count < 10) { 
            chars[iterate++] = chars[i]; 
            chars[iterate++] = "r"+`${count.toString()}`; // and then add a marker "r" followed by the number of times the consecutive character repeats
            count = 1; // Reset the counter
        }
        // If there are 10 or more consecutive characters, convert the counter to a string and split it into individual characters
        else { 
            const s = count.toString().split('');
            chars[iterate++] = chars[i]; // Save the original character in the input array
            for (let j = 0; j < s.length; j++) { 
                chars[iterate++] = "r"+s[j]; // Add a marker "r" followed by each of the individual characters representing the number of times the consecutive character repeats
            };
            count = 1; // Reset the counter
        };
    };

    for (let index = 0; index < iterate; index++) {
        compressString.push(chars[index]); // Copy the compressed characters to the output array compressString
    };
    
    return compressString.join(''); // Return the array of compressed characters
};

/**
 * @param {string} stringCompressed
 * @return {number} sting length 
 */
function getLengthCompressString(stringCompressed) {
    return stringCompressed.length; 
};

function stringCompressionForm() {
    const your_string = document.getElementById('your-string').value;
    let current_length = document.getElementById('current-length');

    current_length.value = your_string.length;
    
    let stringParce = your_string.split('');
    
    //console.log(`your string get and parced: ${stringParce}, typeof ${typeof(stringParce)}`);
    

    const stringCompressed = compress(stringParce);
    const string_compressed = document.getElementById('string-compressed');
    string_compressed.value = stringCompressed;


    let new_length = document.getElementById('new-length');
    new_length.value = getLengthCompressString(stringCompressed);
    
    //console.log(`size of string: ${sizeof(your_string)}`);
    //console.log(sizeof.sizeof(your_string, true));	// 50B

};

const your_string = document.getElementById('your-string');

your_string.addEventListener('keydown', ({key}) => {
	if (key === "Enter") {
		stringCompressionForm();
	};
});

const form_data = document.getElementById('form-data');

form_data.addEventListener('submit', (event) => {
    event.preventDefault();
});

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
});

module.exports = compress;
//export { compress, getLengthCompressString}