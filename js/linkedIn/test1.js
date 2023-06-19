let bear = {
    sound: "roar",
    roar(){
        console.log(`SOUND: ${this.sound}`);
    }    
}

bear.sound = "grunt";

let bearSound = bear.roar;
bearSound();

console.log("end");