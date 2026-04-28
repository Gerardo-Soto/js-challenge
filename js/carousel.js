const solutionBtn = document.getElementById('solution');
const unitTestBtn = document.getElementById('unit-test');

const solutionImg = document.getElementById('solution--img');

const images = [
    "https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/js_challenge%2Fsol_maxValueOfCoins.png?alt=media&token=2c3cc252-b348-4244-a2f4-dc1b014fa4c8",
    "https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/js_challenge%2Ftest_maxValueOfCoins.png?alt=media&token=078d881e-f873-40b8-854b-83b55251577e",
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