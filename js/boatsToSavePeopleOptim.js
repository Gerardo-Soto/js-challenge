
// variable to storing the number of boats
let boats = [];

/**
 * Constraints:

1 <= people.length <= 5 * 104
1 <= people[i] <= limit <= 3 * 104
 */

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
*/
var numRescueBoats = (people, limit) => {
    // Variable for storing boats with people
    boats = [];

    // Sort weights to optimize grouping
    people.sort((a, b) => a - b);
    
    // 
    let indexLeft = 0;
    let indexRight = people.length - 1;
    
    // indices to traverse the array from left to center and right to center
    while(indexLeft <= indexRight ) {
        
        // if the sum of the two people is greater than the limit, we discard by the restriction (people[i] <= limit), that this person only fits in one boat
        if (people[indexLeft] + people[indexRight] <= limit && (indexRight - indexLeft > 0)) {
            // create of a boat and we add the two people 
            boats.push([]);
            boats[boats.length-1].push(people[indexLeft]);
            boats[boats.length-1].push(people[indexRight]);
            //console.log(`people added: ${people[indexLeft]} and ${people[indexRight]}`);
            indexLeft++;
            
            // we add more people until the boat is full
            while (people[indexLeft] + people[indexRight] < limit && indexLeft < indexRight && boats[boats.length - 1].reduce((accumulator, number) => accumulator + number) < limit) {
                boats[boats.length-1].push(people[indexLeft]);
                indexLeft++;
            };

            //console.log(`2    Weight in the boat: ${boats[boats.length - 1].reduce((acumulado, number) => acumulado + number)}`);
            indexRight--;

        } else {
            // create a boat with only one person
            boats.push([]);
            boats[boats.length-1].push(people[indexRight]);
            console.log(`This person can only fit on one boat: ${people[indexRight]}`);
            indexRight--;
        };

    };

    return boats.length;
};


/*
let people = [8,16];
let limit = 16;
console.log(`---------------------------2nd test: ${numRescueBoats(people, limit)} it would be: 2`);
console.log(`Boats used:`);
boats.forEach(boat => console.log(`\n boat: ${boat}`));
boats = [];
*/



function getFormBoatsToSavePeopleData(params) {
    // inputs
    const maximumWeightOfBoats = parseInt(document.getElementById('maximum-weight-of-boats').value);
    const weightOfThePeople = document.getElementById('weight-of-the-people').value.split(',');

    //
    for (let index = 0; index < weightOfThePeople.length; index++) {
        // Check if the data is valid
        if (Number.isInteger(parseInt(weightOfThePeople[index]))) {
            // Check if all the weights can be transferred by the boat limit
            if (parseInt(weightOfThePeople[index]) > maximumWeightOfBoats) {
                let boatsUsed = document.getElementById('boats-used');
                boatsUsed.value = `There is a problem: there is someone who exceeds the limit of the boat (${maximumWeightOfBoats}) and cannot be transferred, weight of the person:: ${weightOfThePeople[index]}`
                let nBoats = document.getElementById('n-boats');
                nBoats.value = '';
                return;
            }// after filtering the data, we save it to send it to the function numRescueBoats
            else {
                weightOfThePeople[index] = parseInt(weightOfThePeople[index]);
            };
        }
        else {
            let nBoats = document.getElementById('n-boats');
            nBoats.value = `Error: you have entered this non-numeric value: ${weightOfThePeople[index]}`
            return;
        };
    };

    
    //outputs
    let nBoats = document.getElementById('n-boats');
    let boatsUsed = document.getElementById('boats-used');

    const n_boat = numRescueBoats(weightOfThePeople, maximumWeightOfBoats)
    nBoats.value = n_boat;


    let boatsUsedTextArea = '';
    for (let boat = 0; boat < boats.length; boat++) {
        boatsUsedTextArea += `Boat ${boat + 1}: ${boats[boat]} \n`;
        
    };

    boatsUsed.value = '';
    boatsUsed.value = boatsUsedTextArea;
};


const form_data = document.getElementById('form-boats-to-save-people-data');

form_data.addEventListener('submit', (event) => {
    event.preventDefault();
});

