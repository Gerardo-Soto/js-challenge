/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (!num) return "Zero";

    const units = {
        0: '',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    }

    const teens = {
        0: 'Ten',
        1: 'Eleven',
        2: 'Twelve',
        3: 'Thirteen',
        4: 'Fourteen',
        5: 'Fifteen',
        6: 'Sixteen',
        7: 'Seventeen',
        8: 'Eighteen',
        9: 'Nineteen',
    }

    const dozens = {
        0: '',
        1: '',
        2: 'Twenty',
        3: 'Thirty',
        4: 'Forty',
        5: 'Fifty',
        6: 'Sixty',
        7: 'Seventy',
        8: 'Eighty',
        9: 'Ninety',
    }

    const three_numbers_separate = {
        0: '',
        1: '',
        2: 'Hundred',// 300,  900,000,000
        3: 'Thousand',// 4,000 & 50,000 
        4: '',
        5: 'Hundred',// 600,000
        6: 'Million',// 7,000,000 & 80,000,000
        7: '',
        8: 'Hundred',// 900,000,000
        9: 'Billion',// 1,000,000,000
        10: ''
    }

    let solution = '';

    const numbersInNum = num.toString().length;
    const numbersInArray = num.toString();
    console.log(`length num (${num}): ${numbersInNum}`);

    let numbersOrder = 0;
    for (let index = numbersInNum - 1; index >= 0; index--) {
        // check teens:
        if ((index == 1 || index == 4 || index == 7) && numbersInArray[numbersOrder] == 1) {
            index--;
            numbersOrder++;
            console.log(`${numbersInArray[numbersOrder]} - ${teens[numbersInArray[numbersOrder]]} - ${three_numbers_separate[index]}  teen number`);
            solution += `${teens[numbersInArray[numbersOrder]]} ${three_numbers_separate[index]} `;
        } else if ((index == 1 || index == 4 || index == 7) && numbersInArray[numbersOrder] !== 1) {
            console.log(`${numbersInArray[numbersOrder]} - ${units[numbersInArray[numbersOrder]]} - ${three_numbers_separate[index]}`);
            if (three_numbers_separate[index] != ''){
                solution += `${dozens[numbersInArray[numbersOrder]]} ${three_numbers_separate[index]} `;
            } else {
                solution += `${dozens[numbersInArray[numbersOrder]]} `;
            }
        } else {

            solution += `${units[numbersInArray[numbersOrder]]} ${three_numbers_separate[index]} `;
        }
        
        
        
        
        numbersOrder++;
    }

    console.log(`Sol: [${solution.trim()}]`);
    return solution.trim();
};

let myNum = 1234567891;
myNum=1214517811;
myNum=100
myNum=1000
numberToWords(myNum);