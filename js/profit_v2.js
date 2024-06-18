/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    // sort workers to find with the highest level
    worker.sort((a,b) => a - b);

    // get index order for jobs by profit
    const jobs = [];
    for (let index_job = 0; index_job < profit.length; index_job++) {
        jobs[index_job] = index_job;
    }

    jobs.sort((a, b) => profit[a] - profit[b]);

    // find the better profit for each worker
    let index_job = jobs.length - 1;
    let amountProfit = 0;

    // start from the bets level worker
    for (let worker_n = worker.length - 1; worker_n >= 0; worker_n--) {
        // find the best job for worker
        while (worker[worker_n] < difficulty[jobs[index_job]]) {
            // job found it. Rest this job:
            index_job -= 1;
            // if there's no more jobs, return the amount profit, don't continue with other worker
            if (index_job < 0) {
                return amountProfit;
            }
        }
        amountProfit += profit[jobs[index_job]];
    }

    return amountProfit;
};

//const difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7];// 100
//const difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25];// 0
const difficulty = [2,4,6,8,10,52,15,15,24], profit = [10,20,30,40,50,25,36,44,12], worker = [9,4,25,6,37,12,20];// 290

console.time('speed');
const result = maxProfitAssignment(difficulty, profit, worker);
console.log(result);
console.timeEnd('speed');

/***
 * Performance: .
 * Runtime: 85 ms    | Beats: 82.98%
 * Memory: 55.69 MB  | Beats: 84:04%
 */