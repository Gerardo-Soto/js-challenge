/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const y = grid.length;
    const x = grid[0].length;
    //console.log(x,y); x=column  y=row
  
    let perimeter = 0;
  
    grid.unshift(new Array(x).fill(0));
    grid.push(new Array(x+2).fill(0));
    for (let row = 0; row < y + 1; row++){
        grid[row].unshift(0);
        grid[row].push(0);
    }
    console.log(grid)
    
    for (let row = 1; row < y + 1; row++){
        for (let column = 1; column < x + 1; column++){
            //if this coors is a island
            if(grid[row][column] == 1){
                // up
                if(grid[row][column + 1] == 0){
                    perimeter = perimeter + 1;
                };
                //right
                if(grid[row + 1][column] == 0){
                    perimeter = perimeter + 1;
                };
                // down
                if(grid[row][column - 1] == 0){
                    perimeter = perimeter + 1;
                };
                //left
                if(grid[row - 1][column] == 0){
                    perimeter = perimeter + 1;
                };
                console.log(`Im on a island x:${row} y:${column}`);
            };
        };
    };
    return perimeter;
};

const island = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
const test2 = [[0,1,1,1,1],[1,1,1,0,0],[0,1,0,0,0],[1,1,0,0,1],[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,1]];
const test3 = [[1]];
const test4 = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];

console.log(islandPerimeter(island));
  