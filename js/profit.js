/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let perfectProfit = Array(worker.length).fill(0);

    for (let worker_n = 0; worker_n < worker.length; worker_n++) {
        for (let difficulty_n = 0; difficulty_n < difficulty.length; difficulty_n++) {
            console.log(`Worker [${worker_n}] (${worker[worker_n]}) , Diff: (${difficulty[difficulty_n]}) , profit: (${profit[difficulty_n]})`);
            // if level worker > level job: do
            if (worker[worker_n] >= difficulty[difficulty_n] ) {
                console.log(`1 if  (${perfectProfit[worker_n]})`);
                // if the new profit is better, accept the task
                if (perfectProfit[worker_n] < profit[difficulty_n]) {
                    console.log('2 if');
                    perfectProfit[worker_n] = profit[difficulty_n];

                }
            } 
        }
    }
    console.log(perfectProfit);

    return perfectProfit.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

//const difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7];// 100
//const difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25];// 0
const difficulty = [2,4,6,8,10,52,15,15,24], profit = [10,20,30,40,50,25,36,44,12], worker = [9,4,25,6,37,12,20];// 290

console.time('speed');
const result = maxProfitAssignment(difficulty, profit, worker);
console.log(result);
console.timeEnd('speed');

/***
 * Sol: Bad Speed.
 * runtime: 2,477 ms | beats 5.32%
 * memory: 53.38 MB  | beats 89.36%
 */