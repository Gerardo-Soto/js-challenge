/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const y = grid.length;
    const x = grid[0].length;
    //console.log(x,y); x=column  y=row
  
    let perimeter = 0;
    
    for (let row = 0; row < x; row++){
      for (let column = 0; column < y; column++){
          // if in this cell there aren't water:
          if (grid[column][row] == 1){
              // is up the limit, perimeter + 1
              try{
                  //up there is water (0), perimeter + 1
                  
                  if (grid[column][row-1] == 0 || grid[column][row-1] == undefined){
                      perimeter = perimeter + 1;
                  }
  
              } catch {
                  //console.log('out / water up')
                  perimeter = perimeter + 1;
  
              }
  
              // is left the limit, perimeter + 1
              try{
                  // left there is water
                  if (grid[column + 1][row] == 0){
                      perimeter = perimeter + 1;
                  }
              } catch {
                  // left is the limit
                  //console.log('out / water  left')
                  perimeter = perimeter + 1;
              }
  
              // is down the limit, peerimeter + 1
              try{
                  //
                  if (grid[column][row + 1] == 0 || grid[column][row + 1] == undefined){
                      perimeter = perimeter + 1;
                  }
              } catch {
                  //
                  //console.log('out / water  down')
                  perimeter = perimeter + 1;
              }
                  
              // is right the limit, perimeter + 1
              try{
                  //
                  if (grid[column - 1][row] == 0){
                      perimeter = perimeter + 1;
                  }
              } catch {
                  //
                  //console.log('out / water  right')
                  perimeter = perimeter + 1;
              }
              
          };
      };
    };
    return perimeter;
};

const island = [[0,0,0],[1,0,1],[0,0,0]];
console.log(islandPerimeter(island));

module.exports = islandPerimeter;