pictures = [
    '/home/gerard/Pictures/save/sony_photos/20190815_184353.jpg',
    '/home/gerard/Pictures/save/sony_photos/20190815_201328.jpg',
    '/home/gerard/Pictures/save/sony_photos/IMG-20220510-WA0071.jpg',
    '/home/gerard/Pictures/save/sony_photos/IMG-20221229-WA0009.jpg',
];

cloudPictures = [
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2F20190818_140742_002.jpg?alt=media&token=443adb9e-e00b-4cb0-a45a-1cc4bdd2e455',
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2F20190818_152800.jpg?alt=media&token=6fa4e3d1-b986-428b-b737-940d1e9b93fe',
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2F20190818_184338.jpg?alt=media&token=e8121682-8363-4d4e-a10a-4b2e641b3bfe',
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2F20190818_184423.jpg?alt=media&token=bb5f740c-0a0e-4ede-99d2-5834796ef525',
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2F20190818_185131.jpg?alt=media&token=7ad70bea-dd5b-45f5-a3fe-785623b29029',
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2F20190818_185202.jpg?alt=media&token=67abc7fe-7657-48e5-8e87-8ff0888f44d8',
];

let currentPictureIndex = 0;

// Stores the setInterval ID used by
// clearInterval to stop the timer
var interval;

// timer
let intervalSeconds = 10 * 1000;
changeImage();

function changeInterval(seconds) {
    intervalSeconds = seconds * 1000 * 60;
    console.log(`new interval: ${intervalSeconds}`);

    changeImage();
}

function changeImage() {
    // Clears the previous setInterval timer
    clearInterval(interval);

    const innerDiv = document.getElementById('inner-div');
    const innerDivBlur = document.getElementById('inner-div-blur');

    const cloudSource = document.getElementById('optionCloudSource');
    if (cloudSource.checked) {
        innerDiv.style.backgroundImage = `url(${cloudPictures[currentPictureIndex]})`;
        innerDivBlur.style.backgroundImage = `url(${cloudPictures[currentPictureIndex]})`;

        currentPictureIndex = (currentPictureIndex + 1) % cloudPictures.length;
        console.log('cloud');
    } else {
        innerDiv.style.backgroundImage = `url(${pictures[currentPictureIndex]})`;
        innerDivBlur.style.backgroundImage = `url(${pictures[currentPictureIndex]})`;

        currentPictureIndex = (currentPictureIndex + 1) % pictures.length;
        console.log('local');
    }

    
    interval = setInterval(changeImage, intervalSeconds);
}

//setInterval(changeImage, intervalSeconds );

function prevPicture() {
    const cloudSource = document.getElementById('optionCloudSource');
    if (cloudSource.checked) {
    
        currentPictureIndex = (currentPictureIndex - 1) % cloudPictures.length;
        console.log(currentPictureIndex);
        if (currentPictureIndex < 0) {
            currentPictureIndex = cloudPictures.length - 1;
        };

        const innerDiv = document.getElementById('inner-div');
        const innerDivBlur = document.getElementById('inner-div-blur');

        innerDiv.style.backgroundImage = `url(${cloudPictures[currentPictureIndex]})`;
        innerDivBlur.style.backgroundImage = `url(${cloudPictures[currentPictureIndex]})`;
    
    } else {
    
        currentPictureIndex = (currentPictureIndex - 1) % pictures.length;
        console.log(currentPictureIndex);
        if (currentPictureIndex < 0) {
            currentPictureIndex = pictures.length - 1;
        };

        const innerDiv = document.getElementById('inner-div');
        const innerDivBlur = document.getElementById('inner-div-blur');

        innerDiv.style.backgroundImage = `url(${pictures[currentPictureIndex]})`;
        innerDivBlur.style.backgroundImage = `url(${pictures[currentPictureIndex]})`;
    
    }

};

function nextPicture() {
    const cloudSource = document.getElementById('optionCloudSource');
    if (cloudSource.checked) {
    
        currentPictureIndex = (currentPictureIndex + 1) % cloudPictures.length;
        console.log(currentPictureIndex);
        const innerDiv = document.getElementById('inner-div');
        const innerDivBlur = document.getElementById('inner-div-blur');

        innerDiv.style.backgroundImage = `url(${cloudPictures[currentPictureIndex]})`;
        innerDivBlur.style.backgroundImage = `url(${cloudPictures[currentPictureIndex]})`;
    
    } else {

        currentPictureIndex = (currentPictureIndex + 1) % pictures.length;
        console.log(currentPictureIndex);
        const innerDiv = document.getElementById('inner-div');
        const innerDivBlur = document.getElementById('inner-div-blur');

        innerDiv.style.backgroundImage = `url(${pictures[currentPictureIndex]})`;
        innerDivBlur.style.backgroundImage = `url(${pictures[currentPictureIndex]})`;
    
    }
};

