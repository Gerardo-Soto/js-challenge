let cat = Object.create({ type: "lion"})
cat.size = "large"

let copyC = { ...cat}
cat.type = "tiger";

console.log(copyC.type, copyC.size);