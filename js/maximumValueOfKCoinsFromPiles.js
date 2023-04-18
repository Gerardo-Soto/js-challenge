/**
 * @param {number[][]} piles - A matrix of coin piles, where piles[i] is an array representing the coins in pile i.
 * @param {number} k - The maximum number of coins that can be selected from all the piles in total.
 * @return {number} - The maximum value that can be obtained by selecting k coins from the given piles.
 */
var maxValueOfCoins = function(piles, k) {
    const piles_n = piles.length;
    
    // return the sum of the coins in currentCoins variable
    return searchCoins(piles, piles_n, k);
};

/**
 * Auxiliary function for performing recursive search for optimal solution.
 * @param {number[][]} piles - A matrix of coin piles, where piles[i] is an array representing the coins in pile i.
 * @param {number} piles_n - The number of coin piles in the matrix.
 * @param {number} k - The maximum number of coins that can be selected from all the piles in total.
 * @return {number} - The maximum value that can be obtained by selecting k coins from the given piles.
 */
function searchCoins(piles, piles_n, k) {
    // First constraint: if there are no available piles, the maximum value is 0.
    if (piles_n ==  0) {
        return 0;
    };

    let result = 0;
    let currentSum = 0;
    
    // Loop to try different amounts of coins in the current pile. 
    for (let currentCoins = 0; currentCoins <= Math.min(piles[piles_n - 1].length, k); currentCoins++) {
        if (currentCoins > 0) {
            currentSum += piles[piles_n - 1][currentCoins -1 ];
        };

        // Performs a recursive call to the function to find the maximum value
        // considering the current pile and the amount of selected coins.
        result = Math.max(result, searchCoins(piles, piles_n - 1, k - currentCoins) + currentSum);
        
    };
    // Returns the maximum value found:
    return result;
};

module.exports = maxValueOfCoins;