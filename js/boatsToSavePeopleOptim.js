
let boats = [];
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
*/
var numRescueBoats = (people, limit) => {

    boats = [];
    let added = false;

    people.sort((a, b) => a - b);
    console.log(`people: ${people}`);
    let indexLeft = 0;
    let indexRight = people.length - 1;
    

    while(indexLeft <= indexRight ) {
        
        //if (people[indexLeft] + people[indexRight] + boats[boats.length - 1].reduce((acumulado, number) => acumulado + number) <= limit) {
        if (people[indexLeft] + people[indexRight] <= limit /*&& boats[boats.length - 1].reduce((acumulado, number) => acumulado + number) < limit*/) {
            
            //console.log(`1    Weight in the boat: ${boats[boats.length - 1].reduce((acumulado, number) => acumulado + number)}`);
            boats.push([]);
            boats[boats.length-1].push(people[indexLeft]);
            boats[boats.length-1].push(people[indexRight]);
            //console.log(`people added: ${people[indexLeft]} and ${people[indexRight]}`);
            indexLeft++;
            
            // add people till the boat was full
            while (people[indexLeft] + people[indexRight] < limit && indexLeft < indexRight && boats[boats.length - 1].reduce((acumulado, number) => acumulado + number) < limit) {
                boats[boats.length-1].push(people[indexLeft]);
                //console.log(`new people added in the same boat: ${people[indexLeft]}`);
                indexLeft++;
            };

            //console.log(`2    Weight in the boat: ${boats[boats.length - 1].reduce((acumulado, number) => acumulado + number)}`);
            indexRight--;

        } else {
            // create a boat with only one person
            boats.push([]);
            boats[boats.length-1].push(people[indexRight]);
            //console.log(`This person can only fit on one boat: ${people[indexRight]}`);
            indexRight--;
        };

    };
    return boats.length;
};


let people = [3,2,2,1,1,1,1,1,1,1,3,1,1,1];
let limit = 10;
console.log(`---------------------------2nd test: ${numRescueBoats(people, limit)} it would be: 4`);
console.log(`Boats used:`);
boats.forEach(boat => console.log(`\n boat: ${boat}`));
boats = [];
