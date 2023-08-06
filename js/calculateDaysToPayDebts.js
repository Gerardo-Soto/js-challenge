/**
 * There is a bank that gives loans to its customers, after one week of the loan, the customer has to pay $1, 
 * the second week he has to pay $2, the third week he has to pay $4, so on and so forth until he completes 
 * his debt, how many weeks will it take the customer to pay the loan?
 */

// Calculate the days to pay the debt

// Debt to pay: 1, 2, 4, 8,  16, 32, 64, 128, 256 
//  paid        1, 3, 7, 15, 31, 63, 127
//  days        1, 2, 3, 4,  5,  6,  7
/** 
 * @param {Array} debts 
 * @returns {Array}
 */
function calculateDaysToPayDebts(debts) {
    if (Number.isInteger(debts)) {
        // first case when debt is 0:
        if (debts <= 0) return 0;
            
        // second case when debt is more than 0:
        // if log2(debt) is a Integer, return this Integer + 1
        // else: round the number to the nearest whole number with Math.ceil()
        return debts = Number.isInteger(Math.log2(debts)) ? Math.log2(debts) + 1 : Math.ceil(Math.log2(debts));
                
    } else {
        const listDebts = debts.split(",").map(Number);
        return listDebts.map(debt => {
            // first case when debt is 0:
            if (debt <= 0) return 0;
            
            // second case when debt is more than 0:
            // if log2(debt) is a Integer, return this Integer + 1
            // else: round the number to the nearest whole number with Math.ceil()
            return debt = Number.isInteger(Math.log2(debt)) ? Math.log2(debt) + 1 : Math.ceil(Math.log2(debt));
        });
    };
};

/*
const examples = [0,1, 2, 3, 4, 8, 16, 32, 50, 96, 64, 63, 65];
console.log(`Debts:       ${examples}`);
console.log(`Days to pay: ${calculateDaysToPayDebts(examples)}`);
*/

function getFormDaysToPayTheDebtData(){
    // inputs
    const debt = document.getElementById('your-debt').value;

    const daysToPay = calculateDaysToPayDebts(debt);


    // output
    const DOMdaysToPayTheDebt = document.getElementById('days-to-pay-the-debt');

    DOMdaysToPayTheDebt.value = '';
    DOMdaysToPayTheDebt.value = daysToPay;
};

const form_data = document.getElementById('form-debt-data');

form_data.addEventListener('submit', (event) => {
    event.preventDefault();
});
