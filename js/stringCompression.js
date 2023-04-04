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

    let compressString = [];
    
    let count = 1;
    let iterate = 0;
    
    for (let i = 0; i < chars.length; i++) { 
        if (chars[i] === chars[i + 1]) { 
            count++;
        }
        else if (count === 1) { 
            chars[iterate++] = chars[i];
        }
        else if (count < 10) { 
            chars[iterate++] = chars[i];
            chars[iterate++] = "r"+`${count.toString()}`;
            count = 1;
        } else { 
            const s = count.toString().split('')
            chars[iterate++] = chars[i];
            for (let j = 0; j < s.length; j++) { 
                chars[iterate++] = "r"+s[j];
            };
            count = 1;
        };
    };

    for (let index = 0; index < iterate; index++) {
        compressString.push(chars[index]);
    };
    
    //console.log(`abs. sol: ${compressString}`);
    //string_compressed.value = compressString;
    return compressString;
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
    
    console.log(`your string get and parced: ${stringParce}, typeof ${typeof(stringParce)}`);
    

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
})

//module.exports = compress;
//export { compress, getLengthCompressString}