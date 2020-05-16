import { clone, copy2dArrayOfObjects, modify } from './copyObjects';
import GraphNode from '../../dataStructures/GraphNode';

function loadArray(grid, arr, numRows, numCols, containsHighlightedCols) {  
    let footerNumToHighlight = 0        

    // console.log('grid: ' + grid)
    //TODO: Fix null grid

    if(containsHighlightedCols === true){
    //   console.log('Current Array: (' + arr[0] + ', {' + arr[1] + "})")
      // footerNumToHighlight = arr[1]

      // console.log('>   arr: ' + arr, 'arr[0]: ' + arr[0] + ' footerNumToHighlight: ' + footerNumToHighlight)
      // arr = arr[0]            
    }      

    //Populate active cols
    let updatedGrid = copy2dArrayOfObjects(grid)    
    
    updatedGrid = populateGrid(updatedGrid, arr, numRows, numCols)          
    
    //Populate highlighted col
    // if (containsHighlightedCols === true){
    //   updatedGrid = highlightCol(grid, footerNumToHighlight, numRows, numCols)
    // }

    return updatedGrid
  }

  function populateGrid(grid, arr, numRows, numCols) {    
    // updatedGrid[4][4].active = true;
    let endOfArr = numRows-2          
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

  function highlightCol(grid, footerNumToHighlight, numRows, numCols){    

    //get idx of footerNum
    let highlightIdx = 0
    let j = 0
    while(j < numCols){
      if(grid[numRows-1][j] === footerNumToHighlight){
        highlightIdx = j
        break
      }
      j += 1
    }

    let col = 0
    let row = numRows-2      

    while(col <= footerNumToHighlight) {

      grid[row][col].isHighlighted = true    

      row -= 1
      col += 1
    }
        
    return grid
  }

  export default loadArray;