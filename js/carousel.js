const solutionBtn = document.getElementById('solution');
const unitTestBtn = document.getElementById('unit-test');

const solutionImg = document.getElementById('solution--img');

const images = [
    "https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/js_challenge%2Fsol_maxValueOfCoins.png?alt=media&token=7d9c22c2-ef19-40cd-b98a-c4ae075e1b69",
    "https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/js_challenge%2Ftest_maxValueOfCoins.png?alt=media&token=8c930bce-df19-44bd-bccd-458e2d9babe4",
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