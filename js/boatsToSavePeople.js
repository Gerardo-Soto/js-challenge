/**
 * https://leetcode.com/problems/boats-to-save-people/
 * 
 * You are given an array people where people[i] is the weight of the ith person, 
 * and an infinite number of boats where each boat can carry a maximum weight of limit. 
 * Each boat carries at most two people at the same time, 
 * provided the sum of the weight of those people is at most limit.

 * Return the minimum number of boats to carry every given person.

Constraints:

1 <= people.length <= 5 * 10^4
1 <= people[i] <= limit <= 3 * 10^4
 */

let boats = [];
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
*/
var numRescueBoats = (people, limit) => {
    boats = [];
    let n_boat = 0;
    let indexLeft = 0;
    let indexRight = people.length - 1;
    
    people.sort((a, b) => a - b);
    //console.log(people);
    let sum;

    while (indexLeft <= indexRight) {
        sum = people[indexLeft] + people[indexRight];

        if (sum <= limit) {
            boats.push([]);
            boats[n_boat].push(people[indexLeft], people[indexRight]);
            indexLeft++;
            indexRight--;
            //n_boat++;

        } else {
            boats.push([]);
            boats[n_boat].push(people[indexRight]);
            //n_boat++;
            indexRight--;
        };
        //console.log(`New boat n[${n_boat}]: ${boats[n_boat]}`);
        n_boat++;
    };
    
    return n_boat;
};


console.log('start');
/*
let people = [1, 2];
let limit = 3;

console.log(`---------------------------1st test: ${numRescueBoats(people, limit)} it would be: 1`);

people = [3,2,2,1];
limit = 3;
console.log(`---------------------------2nd test: ${numRescueBoats(people, limit)} it would be: 3`);
console.log(`Boats used:`);
boats.forEach(boat => console.log(`\n boat: ${boat}`));
boats = [];

people = [3,5,3,4];
limit = 5;
console.log(`---------------------------3rd test: ${numRescueBoats(people, limit)} it would be: 4`);
console.log(`Boats used:`);
boats.forEach(boat => console.log(`\n boat: ${boat}`));
boats = [];

people = [1,2,3,4,1,3,4,2,4,5,3,2,3,1,2,3,3];// 46
limit = 10;
console.log(`---------------------------4th test: ${numRescueBoats(people, limit)} it would be: 9`);
console.log(`Boats used:`);
boats.forEach(boat => console.log(`\n boat: ${boat}`));
boats = [];

people = [21,40,16,24,30];
limit = 50;
console.log(`---------------------------5th test: ${numRescueBoats(people, limit)} it would be: 3`);
console.log(`Boats used:`);
boats.forEach(boat => console.log(`\n boat: ${boat}`));
boats = [];
*/
console.log('end');




function getFormBoatsToSavePeopleData(params) {
    // inputs
    const weightOfThePeople = document.getElementById('weight-of-the-people').value.split(',');
    for (let index = 0; index < weightOfThePeople.length; index++) {
        weightOfThePeople[index] = parseInt(weightOfThePeople[index]);
    };

    const maximumWeightOfBoats = parseInt(document.getElementById('maximum-weight-of-boats').value);
    
    //outputs
    let nBoats = document.getElementById('n-boats');
    let boatsUsed = document.getElementById('boats-used');

    const n_boat = numRescueBoats(weightOfThePeople, maximumWeightOfBoats)
    nBoats.value = n_boat;


    let boatsUsedTextArea = '';
    for (let boat = 0; boat < boats.length; boat++) {
        boatsUsedTextArea += `Boat ${boat + 1}: ${boats[boat]} \n`;
        
    };

    boatsUsed.value = ''
    boatsUsed.value = boatsUsedTextArea;
};


const form_data = document.getElementById('form-boats-to-save-people-data');

form_data.addEventListener('submit', (event) => {
    event.preventDefault();
});

//module.export = numRescueBoats;