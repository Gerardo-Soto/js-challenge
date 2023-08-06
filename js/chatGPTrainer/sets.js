const array = [1, 2, 3, 4, 3, 2, 1];

let removeDuplicate = function (array) {
    const arrayWithoutDuplicate = []
    array.forEach(element => {
        if (!arrayWithoutDuplicate.includes(element)) {
            arrayWithoutDuplicate.push(element)
        }
    });
    return arrayWithoutDuplicate;
}

let removeDuplicateSet = function (array) {
    return [...new Set(array)];// we used propagation operator (...) to convert this set "array" to a new Set again
}

console.log(removeDuplicate(array));
console.log(removeDuplicateSet(array));