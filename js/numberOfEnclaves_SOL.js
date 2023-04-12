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
            grid[0][index_x] = 4;
        };
        // down
        if (grid[grid.length - 1][index_x] == 1) {
            grid[grid.length - 1][index_x] = 4;
        };
    };

    // check borders left and right
    for (let index_y = 0; index_y < grid.length - 1; index_y++) {
        // left
        if (grid[index_y][0] == 1) {
            grid[index_y][0] = 4;
        };
        // right
        if (grid[index_y][grid[0].length - 1] == 1) {
            grid[index_y][grid[0].length - 1] = 4;
        };
    };
    
    console.log(`Borders analyzed:`);
    for (let index_y = 0; index_y < grid.length; index_y ++) {
        console.log(`${grid[index_y]}`);
    };

    // clean all borders:  left to right  AND  up to down

    // first: left to right
    // then:  up to right

    let index_y_revers  = grid.length - 2;
    for (let index_y = 1; index_y < grid.length - 1; index_y++) {
        

        let index_x_revers = grid[0].length - 2;
        for (let index_x = 1; index_x < grid[0].length -1; index_x++) {
            
            if (grid[index_y][index_x] == 1) {
                //console.log(`poss: ${index_y} ${index_x}`);
                
                // up
                if (grid[index_y - 1][index_x] > 1) {
                    grid[index_y][index_x] = 4;
                };
                // down
                if (grid[index_y + 1][index_x] > 1) {
                    grid[index_y][index_x] = 4;
                };
                // left
                if (grid[index_y][index_x - 1] > 1) {
                    grid[index_y][index_x] = 4;
                };
                // right
                if (grid[index_y][index_x + 1] > 1) {
                    grid[index_y][index_x] = 4;
                };
                
            };
            if (grid[index_y_revers][index_x_revers] == 1) {
                console.log(`poss: ${index_y_revers} ${index_x_revers}`);
                //up
                if (grid[index_y_revers - 1][index_x_revers] > 1) {
                    grid[index_y_revers][index_x_revers] = 4;
                };
                //down
                if (grid[index_y_revers + 1][index_x_revers] > 1) {
                    grid[index_y_revers][index_x_revers] = 4;
                };
                // right
                if (grid[index_y_revers][index_x_revers + 1] > 1) {
                    grid[index_y_revers][index_x_revers] = 4;
                };
                // left
                if (grid[index_y_revers][index_x_revers - 1] >  1) {
                    grid[index_y_revers][index_x_revers] = 4;
                };
                
            }

            index_x_revers--;
        };
        index_y_revers--;
    };


    //  Down to up {Y}  right to left {X}

    // first:  down to up   {y}
    // then: right to left  {x}

    index_x_revers = 1;
    for (let index_x = grid.length - 1; index_x > 0 ; index_x--) {
        

        index_y_revers = 1;
        for (let index_y = grid.length -2; index_y > 0; index_y--) {
            
            if (grid[index_y][index_x] == 1) {
                
                if (grid[index_y - 1][index_x] > 1) {
                    grid[index_y][index_x] = 4;
                };
                
                if (grid[index_y + 1][index_x] > 1) {
                    grid[index_y][index_x] = 4;
                };

                if (grid[index_y][index_x - 1] > 1) {
                    grid[index_y][index_x] = 4;
                };

                if (grid[index_y][index_x + 1] > 1) {
                    grid[index_y][index_x] = 4;
                };
                
            };

            if (grid[index_y_revers][index_x_revers] == 1) {
                if (grid[index_y_revers + 1][index_x_revers] > 1) {
                    grid[index_y_revers][index_x_revers + 1] = 4;
                };

                if (grid[index_y_revers - 1][index_x_revers] > 1) {
                    grid[index_y_revers][index_x_revers] = 4;
                };

                if (grid[index_y_revers][index_x_revers + 1] >1) {
                    grid[index_y_revers][index_x_revers] = 4;
                };

                if (grid[index_y_revers][index_x_revers - 1] >1) {
                    grid[index_y_revers][index_x_revers] = 4;
                };
            }

            index_x_revers++;
        };
        index_y_revers++;
    };

    let sol = 0;

    for (let index_y = 1; index_y < grid.length -1; index_y++) {
        for (let index_x = 0; index_x < grid.length; index_x++) {
            if (grid[index_y][index_x] == 1) {
                sol++;            
            };
            
        };
    };



    console.log(`Limits analyzed:`);
    for (let index_y = 0; index_y < grid.length; index_y ++) {
        console.log(`${grid[index_y]}`);
    };


    return sol;
};

// 1st test  it would be 3
//const myGrid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];

// 2nd test, it would be 0
//const myGrid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]];

// 3rd test, it would be 9
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

// test 19, it would  be 3
const myGrid = [[0,0,0,1,1,1,0,1,0,0],[1,1,0,0,0,1,0,1,1,1],[0,0,0,1,1,1,0,1,0,0],[0,1,1,0,0,0,1,0,1,0],[0,1,1,1,1,1,0,0,1,0],[0,0,1,0,1,1,1,1,0,1],[0,1,1,0,0,0,1,1,1,1],[0,0,1,0,0,1,0,1,0,1],[1,0,1,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,1]]

console.log(`Sol: ${numEnclaves(myGrid)}`);
