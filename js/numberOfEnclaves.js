/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {

    for (let index_y = 0; index_y < grid.length; index_y ++) {
        console.log(`${grid[index_y]}`);
    }
    console.log(`Coors Y: ${grid.length}`);
    console.log(`Coors X: ${grid[0].length}`);

    
    // check borders up and down:
    for (let index_x = 0; index_x < grid[0].length - 1; index_x++) {
        //up
        if (grid[0][index_x] == 1) {
            grid[0][index_x] = -1;
        };
        // down
        if (grid[grid.length - 1][index_x] == 1) {
            grid[grid.length - 1][index_x] = -1;
        };
    };

    // check borders left and right
    for (let index_y = 0; index_y < grid.length - 1; index_y++) {
        // left
        if (grid[index_y][0] == 1) {
            grid[index_y][0] = -1;
        };
        // right
        if (grid[index_y][grid[0].length - 1] == 1) {
            grid[index_y][grid[0].length - 1] = -1;
        };
    };
    
    console.log(`Borders analyzed:`);
    for (let index_y = 0; index_y < grid.length; index_y ++) {
        console.log(`${grid[index_y]}`);
    };
    

    let countPossibleIsland = 2;

    for (let index_y = 1; index_y < grid.length - 1; index_y ++) {
        for (let index_x = 1; index_x < grid[0].length - 1; index_x++) {
            //console.log(`cords to analyze: x:${index_x}, y:${index_y}, value: ${grid[index_y][index_x]}`);
            if (grid[index_y][index_x] >= 1) {
                if (
                    grid[index_y][index_x-1] < 0 || // up
                    grid[index_y][index_x+1] < 0 || // down
                    grid[index_y-1][index_x] < 0 || // left
                    grid[index_y+1][index_x] < 0 // right
                ) {
                    // this coord is boundary
                    grid[index_y][index_x] = -1
                } else {
                    grid[index_y][index_x] = countPossibleIsland;
                    countPossibleIsland++;
                };
            };
        };
    };

    console.log(`----------------------- 1st round: Island founded:`);
    for (let index_y = 0; index_y < grid.length; index_y ++) {
        console.log(`${grid[index_y]}`);
    };


    for (let index_y = grid.length - 2; index_y > 0; index_y --) {
        for (let index_x = grid[0].length - 2; index_x > 0; index_x--) {
            //console.log(`cords to analyze: x:${index_x}, y:${index_y}, value: ${grid[index_y][index_x]}`);
            if (grid[index_y][index_x] > 0) {
                console.log(`y:${index_y}, x:${index_x},  ${grid[index_y][index_x]}`);
                if (
                    grid[index_y][index_x-1] < 0 || // left
                    grid[index_y][index_x+1] < 0 || // right
                    grid[index_y-1][index_x] < 0 || // up
                    grid[index_y+1][index_x] < 0 // down
                ) {
                    // this coord is boundary
                    console.log(`its cords: y:${index_y} x:${index_x} have a boundary: ${grid[index_y][index_x]}     with: left: ${grid[index_y][index_x-1]} right: ${grid[index_y][index_x+1]}  up: ${grid[index_y-1][index_x]}   down: ${grid[index_y+1][index_x]}`);
                    grid[index_y][index_x] = -1;
                } else {
                    // hereda el valor mayor de la isla mas cercana
                    // left:
                    if (grid[index_y][index_x - 1] > 1 && grid[index_y][index_x - 1] > grid[index_y][index_x]) {
                        grid[index_y][index_x] = grid[index_y][index_x - 1];
                    };
                    if (grid[index_y][index_x - 1] > 1 && grid[index_y][index_x - 1] < grid[index_y][index_x]) {
                        grid[index_y][index_x - 1] = grid[index_y][index_x];
                    };

                    // up
                    if (grid[index_y - 1][index_x] > 1 && grid[index_y - 1][index_x] > grid[index_y][index_x]) {
                        grid[index_y][index_x] = grid[index_y - 1][index_x];
                    };
                    if (grid[index_y - 1][index_x] > 1 && grid[index_y - 1][index_x] < grid[index_y][index_x]) {
                        grid[index_y - 1][index_x] = grid[index_y][index_x];
                    };
                    /*
                    grid[index_y][index_x] = countPossibleIsland;
                    countPossibleIsland++;*/
                };
            };
        };
    };



    console.log(`----------------------- 2nd round: Island founded:`);
    for (let index_y = 0; index_y < grid.length; index_y ++) {
        console.log(`${grid[index_y]}`);
    };








    const islands = new Set();

    for (let index_y = 1; index_y < grid.length - 1; index_y ++) {
        for (let index_x = 1; index_x < grid[0].length - 1; index_x++) {
            if (grid[index_y][index_x] > 1) {
                islands.add(grid[index_y][index_x]);
            };
        };
    };
    console.log(islands);
    return islands.size;
};

/*const myGrid = [
    [0,0,0,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,1,0,0,1,0,1,0],
    [0,0,0,0,0,1,0,0],
    [0,0,0,1,0,1,0,1],
    [0,1,1,0,0,1,0,0],
    [0,0,0,0,1,0,1,0]];*/

/*    const myGrid = [
        [0,0,0,1,0,0,0,0],
        [0,1,1,0,0,1,0,0],
        [0,0,0,0,1,0,1,0]];
        */

/*const myGrid = [
            [0,0,0,1,1,1,0,1,0,0],
            [1,1,0,0,0,1,0,1,1,1],
            [0,0,0,1,1,1,0,1,0,0],
            [0,1,1,0,0,0,1,0,1,0],
            [0,1,1,1,1,1,0,0,1,0],
            [0,0,1,0,1,1,1,1,0,1],
            [0,1,1,0,0,0,1,1,1,1],
            [0,0,1,0,0,1,0,1,0,1],
            [1,0,1,0,1,1,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,1]]*/

const myGrid = [[0,0,0,1,1,1,0,1,0,0],[1,1,0,0,0,1,0,1,1,1],[0,0,0,1,1,1,0,1,0,0],[0,1,1,0,0,0,1,0,1,0],[0,1,1,1,1,1,0,0,1,0],[0,0,1,0,1,1,1,1,0,1],[0,1,1,0,0,0,1,1,1,1],[0,0,1,0,0,1,0,1,0,1],[1,0,1,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,1]];

console.log(`Sol: ${numEnclaves(myGrid)}`);
