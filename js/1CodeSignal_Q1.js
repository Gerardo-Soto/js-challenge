/*
Given an array a, your task is to output an array b of the same length by applying the following transformation: 
– For each i from 0 to a.length - 1 inclusive, b[i] = a[i - 1] + a[i] + a[i + 1]
– If an element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, use 0 in its place
– For instance, b[0] = 0 + a[0] + a[1]
*/

function arrayManipulation(array){
    let solution = Array(array.length)
    //console.log(solution);
    
    
    // case left
    solution[0] = array[0] + array[1];

    // for the rets

    for (let index = 1; index <= array.length - 2; index++) {
        solution[index] = 0
        solution[index] = array[index - 1] + array[index] + array[index + 1]; 
        
    }

    // case right
    solution[array.length - 1] = array[array.length - 2] + array[array.length - 1];

    return solution;
}

function arrayManipulationBest(params) {
    let solution = [];
    for (let index = 0; index < params.length; index++) {
        solution[index] = params[index]
        if (index > 0) {
            solution[index] = solution[index] + params[index - 1]
        }
        if (index < params.length - 1){
            solution[index] = solution[index] + params[index + 1] 
        }
        
    }
    return solution;
}

let test1= [1,2,3]
test1 = [4,0,1,-2,3,7,3,5,8,7,15,85,74,89,56,74]
//test1 = [5,8]

console.time()
console.log(arrayManipulation(test1));
console.timeEnd()
console.time()
console.log(arrayManipulationBest(test1));
console.timeEnd()