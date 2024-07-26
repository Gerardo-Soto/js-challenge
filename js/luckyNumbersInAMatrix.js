/**
 * Lucky number in a matrix
 * Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    //console.log(matrix);
    //console.log(Math.min(...matrix[0]));
    const checkDuplicate = new Set();
    const uniqueElements = new Set();
    let maxColumValue;
    let minRowValue;
    for (let row = 0; row < matrix.length; row++) {
        // get only the min value in the row matrix[n]:
        //console.log(`C:${matrix[row][0]} - r:${matrix[row]}`);
        minRowValue = Math.min(...matrix[row]);

        const indexMinRowValue = matrix[row].indexOf(minRowValue);
        console.log(indexMinRowValue);

        let createColumn = []
        for (let column = 0; column < matrix.length; column++) {
            createColumn.push(matrix[column][indexMinRowValue]);
        }

        console.log(`New column created: ${createColumn}`);

        maxColumValue = Math.max(...createColumn);

        console.log(`Column created: ${createColumn}, Row: ${matrix[row]} - Max column value: ${maxColumValue} - min row value: ${minRowValue}`);


        if (!uniqueElements.has(maxColumValue)) {
            uniqueElements.add(maxColumValue)
        } else {
            checkDuplicate.add(maxColumValue)
        }
    
        if (!uniqueElements.has(minRowValue)) {
            uniqueElements.add(minRowValue)
        } else {
            checkDuplicate.add(minRowValue);
        }
    }


    //console.log(checkDuplicate, uniqueElements);
    return [...checkDuplicate];
};

let matrix = [[7,5,8],[4,5,6]];
//matrix = [[3,7,8],[12,11,13],[15,16,14]]
//matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
//matrix = [[7,8],[1,2]]
//matrix=[[3,6],[7,1],[5,2],[4,8]]
//matrix=[[3,6],[7,1],[5,2]]



console.log(luckyNumbers(matrix))