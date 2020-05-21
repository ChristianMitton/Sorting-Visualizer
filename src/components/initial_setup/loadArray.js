// import { clone, copy2dArrayOfObjects, modify } from './copyObjects';
import { copy2dArrayOfObjects } from './copyObjects';
// import GraphNode from '../../dataStructures/GraphNode';

function loadArray(grid, arr, numRows, numCols) {      
    let updatedGrid = copy2dArrayOfObjects(grid)   

    //Populate active cols using input array
    updatedGrid = populateGrid(updatedGrid, arr, numRows, numCols)              

    return updatedGrid
  }

  function populateGrid(grid, arr, numRows, numCols) {    
    // updatedGrid[4][4].active = true;
    // let endOfArr = numRows-2          
    let col = 0
    while(col < numCols){
            
      let currentNum = arr[col]

      grid = fillCol(grid, col, currentNum, numRows, numCols)
      col += 1
    }      
    return grid

  }

  function fillCol(grid, col, fillAmount, numRows, numCols){         
    let count = 0
    let row = numRows-2          
    
    while(count <= fillAmount) {      
      grid[row][col].active = true      
      // write number to footer
      grid[numRows-1][col].value = fillAmount

      row -= 1
      count += 1
    }

    return grid
  }

  export default loadArray;