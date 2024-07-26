function sortArrayQuickSort(nums) {
    // Helper function to perform the quickSort algorithm.
    function quickSort(left, right) {
        // If the current segment is empty or has one element, no sorting is needed.
        if (left >= right) {
            return;
        }

        let i = left - 1;
        let j = right + 1;

        // Choose the pivot element from the middle of the segment.
        const pivot = nums[(left + right) >> 1];

        // Partition process: elements < pivot go to the left, elements > pivot go to the right.
        while (i < j) {
            // Find left element greater than or equal to the pivot.
            while (nums[++i] < pivot);
            // Find right element less than or equal to the pivot.
            while (nums[--j] > pivot);

            // If pointers have not crossed, swap the elements.
            if (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        // Recursively apply the same logic to the left partition.
        quickSort(left, j);
        // Recursively apply the same logic to the right partition.
        quickSort(j + 1, right);
    }

    // Obtain the length of the array to sort.
    const n = nums.length;
    // Call the quickSort helper function on the entire array.
    quickSort(0, n - 1);

    // Return the sorted array.
    return nums;
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var sortArray = function(numbers) {
    let indexMain = 0
    let aux;
    let steps = 0;
    //for (let indexMain = 0; indexMain < numbers.length - 1; indexMain++) {
    while (indexMain < numbers.length) {
        // if  [2] = 2 & [3] 1, then invert:
        if (numbers[indexMain] > numbers[indexMain + 1]) {
            aux = numbers[indexMain + 1];
            numbers[indexMain + 1] = numbers[indexMain];
            numbers[indexMain] = aux;
            
            if (indexMain > 0) {
                indexMain--
                steps++
            };

        } else {
            indexMain++
            indexMain += steps;
            steps = 0;
        }
    }

    return numbers;
};

function quickSortIterativo(arr) {
    const stack = [];
    stack.push(0);
    stack.push(arr.length - 1);
  
    while (stack.length > 0) {
      const high = stack.pop();
      const low = stack.pop();
  
      // Si low es menor o igual a high, significa que la sublista tiene al menos un elemento
      if (low <= high) {
        const pivot = partition(arr, low, high);
        
        // Agregar las sublistas a la pila para procesarlas después
        if (pivot - 1 > low) {
          stack.push(low);
          stack.push(pivot - 1);
        }
        if (pivot + 1 < high) {
          stack.push(pivot + 1);
          stack.push(high);
        }
      }
    }
  
    return arr;
}
  
// Función de partición (similar a la versión recursiva)
function partition(arr, low, high) {
    // ... (implementación de la partición)
    // Elegir el último elemento como pivote
  const pivot = arr[high];

  // Índice del elemento más pequeño
  let i = (low - 1);

  for (let j = low; j <= high - 1; j++) {
    // Si el elemento actual es menor o igual al pivote
    if (arr[j] <= pivot) {
      i++;
      // Intercambiar arr[i] y arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Mover el pivote al lugar correcto
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return (i + 1);
}

let number = [7,1,3,5,4]
 

number = [7,1,3,5,4,0,2,6,9,8,2,4,6,1,6,4,9,7,9,6,2,0,4,2,8,5,7,0,3,3,65,5,8,4,8,7,5,32,0,65,8,9,3,7,5,5,5,2,2,5,4,5,5,4,5,6,3,7,8,5,2,47,7,0,7,8,8,8,8,8,9,6,52,]
//console.log(number);
console.time()
const sol = sortArray(number);
console.log(sol);
console.timeEnd()
// 3.375
console.time()
const secondSol = sortArrayQuickSort(number)
//console.log(secondSol);
console.timeEnd();

console.time()
const solIterabl = quickSortIterativo(number)
console.timeEnd()