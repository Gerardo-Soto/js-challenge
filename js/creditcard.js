// get input data
const inputCardUser = document.querySelector('#input-card-user');
const inputCardNumber = document.querySelector('#input-card-number');
const inputCardDate = document.querySelector('#input-card-date');
const inputCardCvv = document.querySelector('#input-card-cvv');

// our regular expression to evaluate
const maskCardNumber = '####-####-####-####';
const maskCardDate = '##/##';
const maskCardCvv = '###';

// our data validated
let cardUser = [];
let deadLetterSpanish = false;
let cardNumber = [];
let cardDate = [];
let cardCvv = [];

//Length of card user
const lengthCardUser = 30;

//
inputCardUser.addEventListener('keydown', e => {
    // configuration by default for input
    if (e.key === 'Tab') {
        return;
    }

    // ignore the behavior default on keydown
    e.preventDefault();
    
    // call our validation
    validateCardUser(e.key, cardUser);

    // add value validate to input
    inputCardUser.value = cardUser.join('');
});

// validate a bank user
function validateCardUser(key, cardUser){
    const expression = [" ","b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"
     ,"B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","T","V","W","X","Y","Z"];
    const expressionSpanish = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const letterSpanishToSave = ["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"];
    if (expression.includes(key) && cardUser.length < lengthCardUser) {
        cardUser.push(key);
    } else if (key === 'Backspace' && cardUser.length > 0){
        cardUser.pop();
    } else if (key === 'Dead' && cardUser.length < lengthCardUser){
        deadLetterSpanish = true;
    } else if (expressionSpanish.includes(key) && cardUser.length < lengthCardUser){
        if (deadLetterSpanish === true){
            let indexLetter = expressionSpanish.indexOf(key);
            cardUser.push(letterSpanishToSave[indexLetter]);
            deadLetterSpanish = false
        } else {
            cardUser.push(key);
        }
    } else {
        
    }
}


// Validate data for Card Number input of keyboard
inputCardNumber.addEventListener("keydown", e => {
    // configuration for input
    if (e.key === 'Tab'){
        return;
    }

    // ignore the behavior Default on keydown
    e.preventDefault();

    //function to validate input key
    handleInputCardNumber(maskCardNumber, e.key, cardNumber);

    //insert the value evaluated into input
    inputCardNumber.value = cardNumber.join('');
});

function handleInputCardNumber(mask, key, cardNumber){
    const expression = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (expression.includes(key) && cardNumber.length + 1 <= mask.length) {
 
        if (maskCardNumber[cardNumber.length] === '-') {
            // if there are match with the mask, first add the number and then the mask symbol:
            
            cardNumber.push('-');
            cardNumber.push(key);
        } else {
            cardNumber.push(key);
        }

    } else if (key === 'Backspace' && cardNumber.length > 0){
        const dataDeleted = cardNumber.pop();
        // if the last number was followed by '-', delete both from the array:
        if (cardNumber[cardNumber.length - 1] === '-') {
            cardNumber.pop();
        }
    } else {}
}


inputCardDate.addEventListener('keydown', (e) => {
    // configuration 
    if (e.key === 'Tab') {
        return;
    }

    e.preventDefault();

    // call out validation function:
    handleInputCardDate(maskCardDate, e.key, cardDate);
    
    //insert the value evaluated into input
    inputCardDate.value = cardDate.join('');
});

function handleInputCardDate(mask, key, cardDate){
    const expression = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if(expression.includes(key) && cardDate.length < mask.length){
        if(mask[cardDate.length] === '/'){
            cardDate.push('/');
        }
        cardDate.push(key);
    } else if (key === 'Backspace'){
        const dataDeleted = cardDate.pop();
        if (cardDate[cardDate.length - 1] === '/') {
            cardDate.pop();
        }
    } else {}

    if (cardDate.length == mask.length){
        validateDate(cardDate);
    }
}

function validateDate(cardDateVal){
    const dataDate = String(cardDateVal).split('/');
    const decena = parseInt(dataDate[0][0]);
    const unit = parseInt(dataDate[0][2]);
    console.log(decena, unit);
    if (decena > 0 && unit > 2) {
        inputCardDate.value = "";
        cardDate = [];

    } else if (decena == 0 && unit == 0){
        inputCardDate.value = "";
        cardDate = [];
    } else {}
}


inputCardCvv.addEventListener('keydown', (e) => {
    // Configuration event
    if (e.key === 'Tab') {
        return;
    }

    e.preventDefault();

    // call our validation function
    handleInputCardCvv(maskCardCvv, e.key, cardCvv);

    // render value evaluated into input
    inputCardCvv.value = cardCvv.join('');
});

function handleInputCardCvv(mask, key, cardCvv){
    const expression = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (expression.includes(key) && cardCvv.length < mask.length) {
        cardCvv.push(key);
    } else if (key === 'Backspace') {
        cardCvv.pop();
    } else {}
}