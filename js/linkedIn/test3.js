
let animals = ["eagle", "osprey", "salmon"];

let key = animal => animal === "salmon";

if (animals.some(key)) {
    console.log("swim");
}

