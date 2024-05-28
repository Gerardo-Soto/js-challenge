/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let res = 0
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if(grid[i][j] === 1) {
                let curPer = 0
                if(i===0 || grid[i-1][j] === 0) {
                    curPer++
                }

                if(j === 0 || grid[i][j-1] === 0) {
                    curPer++
                }

                if(i === grid.length - 1 || grid[i+1][j] === 0) {
                    curPer++
                }

                if(j === grid[0].length - 1 || grid[i][j+1] === 0) {
                    curPer++
                }

                res += curPer
            }
        }
    }


    return res
};