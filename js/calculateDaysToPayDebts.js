// days to pay: 1, 2, 4, 8,  16, 32, 64, 128, 256 
//              1, 3, 7, 15, 31, 63, 127
//  days        1, 2, 3, 4,  5,  6,  7
/**
 * 
 * @param {Array} debts 
 * @returns {Array}
 */
function calculateDaysToPayDebts(debts) {
    return debts.map(debt => {
        if (debt === 0) return 0;
        //if (debt === 1) return 1;
        //if (debt === 2) return 2;
        //if (debt === 4) return 3;
        
        //console.log(`Log2 (${debt}): ${Math.log2(debt)}, Days: ${Math.ceil(Math.log2(debt))}`);
        return debt = Number.isInteger(Math.log2(debt)) ? Math.log2(debt) + 1 : Math.ceil(Math.log2(debt));    //   Math.ceil(Math.log2(debt));// undefined
    });
};

const examples = [0,1, 2, 3, 4, 8, 16, 32, 50, 96, 64, 63, 65];
console.log(`Debts:       ${examples}`);
console.log(`Days to pay: ${calculateDaysToPayDebts(examples)}`);