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
    return [...new Set(array)];// utilizamos el operador de propagación ... para convertir el conjunto nuevamente en un array.
}

console.log(removeDuplicate(array));
console.log(removeDuplicateSet(array));