function smallestMissingPositive(nums) {
    if (nums.length <= 0) return 1

    //const dict = {}
    /*nums.forEach(element => {
        if (element >= 0) {
            dict[element] = true;
        }
    });*/
    const onlyPositive = nums.filter( num => num > 0);

    //quit repeat numbers with a Set
    const set = new Set(onlyPositive);

    //console.log(dict);

    // find the first positive number isn't there
    /*let count = 0;
    for (const key in dict) {
        if (!dict.hasOwnProperty(count)) {            
            return count;
        }
        console.log(`property: ${count}`);
        count = count + 1;
    }
    return count*/

    for (let i = 1; i <= set.size; i++) {
        if (!set.has(i)) return i;
        var iLast = i;
    }

    return iLast + 1;

}

const nums = [-2, 6, 7, 3, 0, 1, 2, 4, 5];
console.log(smallestMissingPositive(nums));


const myList = []
myList[0] = 0
myList[1] = 1
console.log(myList, myList.length);
myList[100] = 100
console.log(myList, myList.length);
