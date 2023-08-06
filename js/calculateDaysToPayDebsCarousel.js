const solutionBtn = document.getElementById('solution');
const unitTestBtn = document.getElementById('unit-test');

const solutionImg = document.getElementById('solution--img');

const images = [
    "https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/js_challenge%2FcalculateWeeksToPayDebts.png?alt=media&token=29c5a2d4-c7e4-4092-9c8d-6c59a031318a",
    "https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/js_challenge%2FcalculateWeeksToPayDebtsTest.png?alt=media&token=0052831a-87ab-4bb7-96bf-694028cc280f",
];

function changeImage(image) {
    if (image == "solutionImg") {
        solutionImg.src = images[0];
    } else {
        solutionImg.src = images[1];
    }
};

solutionBtn.addEventListener('click', () => {
    changeImage("solutionImg");
});

unitTestBtn.addEventListener('click', () => {
    changeImage("unitTestImg");
});