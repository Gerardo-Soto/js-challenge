// start: 13:03

function loopTable(numbers) {
    let power_of_2 = 0;
    for (let second = 0; second < numbers.length; second++) {
        for (let first = 0; first <= second; first++) {
            //console.log(`${numbers[first]} + ${numbers[second]} = ${numbers[first]+numbers[second]}, sqrt: ${Math.sqrt(numbers[first]+numbers[second])}, is an integer: ${Number.isInteger(Math.sqrt(numbers[first]+numbers[second]))}`);
            const sumElements = numbers[first] + numbers[second];
            const sqrtSumElements = Math.sqrt(sumElements);
            if (Number.isInteger(sqrtSumElements)) {
                if (sqrtSumElements > 0) {
                    power_of_2 += 1
                    console.log(sumElements);
                    
                }
            }
            if (sqrtSumElements == 2) {
                power_of_2 += 1
                console.log(sumElements);
            }
        }
        
    }
    return power_of_2
}

function loopTableGPT(numbers) {
    let power_of_2 = 0;
    for (let second = 0; second < numbers.length; second++) {
        for (let first = 0; first <= second; first++) {
            const sum = numbers[first] + numbers[second];
            const square = Math.sqrt(sum);
            //console.log(square);
            
            // check if the sqrt is an integer
            if ((Number.isInteger(square) || sum === 1 || sum === 2)) {
                if (square > 0) {  // Combina la condición de raíz mayor a 0 y si es exactamente 2
                    power_of_2 += 1;
                    console.log(numbers[first]+numbers[second]);
                }
            }
        }
    }
    return power_of_2;    
}
let test = [-2, -1, 0, 1, 2]// 5
test = [1, -1, 2, 3];// 5
test = [69,8,-8,52,14,23,2,0,-3,-7,46,5,-7,4,25]

console.time()
console.log('R:'+loopTable(test));
console.timeEnd()

console.time()
console.log('R:' +loopTableGPT(test));
console.timeEnd()


