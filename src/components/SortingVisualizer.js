import React, { Component } from 'react';
import Node from './Node/Node';
import '../styles/styles.css';

import { clone, copy2dArrayOfObjects, modify } from './initial_setup/copyObjects';

let GraphNode = require('../dataStructures/GraphNode').default;
let createDefaultGrid = require('./initial_setup/createDefaultGrid').default;

let numRows = 20
let numCols = 10
let testArr = [ 9 , 2 , 7 , 5 , 8 , 4 , 3 , 1 , 6 ]

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: []
        };
    }

    componentDidMount() {
      // create grid when component is first rendered
      const grid = createDefaultGrid(numRows, numCols);
      
      this.setState({
          grid: grid
      });
    }

    loadGrid() {
      // const {updatedGrid} = this.state;  
      let updatedGrid = copy2dArrayOfObjects(this.state.grid)
      
      updatedGrid = this.populateGrid(updatedGrid, testArr)      
      
      this.setState ({
        grid: updatedGrid
      })
    }

    populateGrid(grid, arr) {
      // updatedGrid[4][4].active = true;
      let endOfArr = numRows-2      

      let col = 0
      while(col < numCols){
        let currentNum = arr[col]

        grid = this.fillCol(grid, col, currentNum)
        col += 1
      }      
      return grid

    }

    fillCol(grid, col, fillAmount){            
      let count = 0
      let row = numRows-2      

      while(count <= fillAmount) {
        grid[row][col].active = true
        row -= 1
        count += 1
      }
      return grid
    }

    render(){     
      const {grid} = this.state;  
      let cols = new Array(numCols).fill(0)

      let count = 0;
      
      return (
          <div>
            <p>                
                Test array: {testArr}
            </p>
            <button onClick={() => this.loadGrid()}>
                Load Array
            </button>
            <div className="grid">
            {/* Map can have three parameters: value, index, array */}
              {grid.map( (row, rowIdx) => {
                return (
                  <div key={rowIdx}>
                    {row.map((node, nodeIdx) => {                                
                      // obtaing the current node and create a div for it
                      const {value, row, col, active} = node;
                      //TODO: if at the last row, figure out how to add numbers
                      if (row == numRows - 1) {

                      }
                      return (
                        <Node 
                            key={count++} 
                            value={value}
                            row={row}
                            col={col}
                            maxRows={numRows}
                            isActive={active}
                        />
                      )
                    }) }                            
                  </div>
                )
              })}                
            </div>
          </div>
      )
    }
}

export default SortingVisualizer;