let album = [];
fillArticles(album, 100);

function fillArticles(album, amount) {
    for (let index = 0; index < amount; index++) {
        album.push(index);
    }
}

console.log(album);




/** random generator */
// declare the function 
const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}; 
    
let numbersShuffle = [];
let indexShuffle = 0;
let mount = 0;

for (let index = 1; index < 100; index++) {
    numbersShuffle.push(index);
};

const myShuffleArray = shuffle(numbersShuffle);
console.log(myShuffleArray);

function next() {
    mount = mount + myShuffleArray[indexShuffle];
    // indexShuffle + 1
    indexShuffle = (indexShuffle + 1) % myShuffleArray.length;
    
    console.log(`indexShuffle: ${indexShuffle}, mount: ${mount}`);

    console.log(album[mount % album.length]);
};

function prev() {
    if (indexShuffle > 0) {
        indexShuffle = (indexShuffle - 1) % myShuffleArray.length;
    
        mount = mount - myShuffleArray[indexShuffle];
    
        console.log(`indexShuffle: ${indexShuffle}, mount: ${mount}`);
        console.log(album[mount % album.length]);
        
    };
};

next()
next()
next()
next()
next()
next()
prev()
prev()
prev()
prev()
prev()
prev()
prev()
prev()
next()
prev()
prev()
next()
next()
