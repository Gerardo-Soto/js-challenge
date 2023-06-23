// What is the output of this code:

class RainForest{
    static minimumRailFall = 60;
}

let congo = new RainForest();
console.log(RainForest.minimumRailFall);
RainForest.minimumRailFall = 80;
console.log(congo.minimumRailFall);
console.log(RainForest.minimumRailFall);