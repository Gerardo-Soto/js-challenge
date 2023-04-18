
function getData() {
    let piles = document.getElementById('your-piles').value;
    const coins = document.getElementById('coins').value;

    piles = piles.split('/');
    data = [];

    for (let index = 0; index < piles.length; index++) {
        const pile = piles[index].split(',');
        const numberPile = pile.map(Number);
        data.push(numberPile);
    };

    const sol = maxValueOfCoins(data, coins);

    document.getElementById('maximum-total').value = sol;
};

const dataForm = document.getElementById('form-data');

dataForm.addEventListener('submit', (event) => {
    event.preventDefault();
});
