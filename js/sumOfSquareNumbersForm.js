const judgeSquareSum = require('../js/sumOfSquareNumbers')

const form = document.querySelector('#form-data');
form.addEventListener('submit', e => {
    // don't send form native
    e.preventDefault();
});

function squareNumbersForm() {
    const numberForm = parseInt(document.querySelector('#your-number').text);
    const isSolved = document.querySelector('#isSolved');
    const firstAnswerForm = document.querySelector('#firstAnswer');
    const secondAnswerForm = document.querySelector('#secondAnswer');
    
    const answer = judgeSquareSum(numberForm);
    isSolved.value = answer;
    firstAnswerForm = firstSquareForm;
    secondAnswerForm = secondSquareForm;
}
