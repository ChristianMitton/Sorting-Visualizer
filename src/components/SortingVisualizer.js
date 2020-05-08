import React, { Component } from 'react';
import Node from './Node/Node';
import '../styles/styles.css';

import { clone, copy2dArrayOfObjects, modify } from './initial_setup/copyObjects';
import loadArray from './initial_setup/loadArray';

let GraphNode = require('../dataStructures/GraphNode').default;
let createDefaultGrid = require('./initial_setup/createDefaultGrid').default;
let load_array = require('./initial_setup/loadArray').default;

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
      //? '+ 2' accounts for bar and footer
      numRows = Math.max.apply(null, testArr) + 2
      numCols = testArr.length

      const grid = createDefaultGrid(numRows, numCols);
      
      this.setState({
          grid: grid
      });
    }

    loadArray() {      
      let updatedGrid = copy2dArrayOfObjects(this.state.grid)
      
      updatedGrid = load_array(updatedGrid, testArr, numRows, numCols)      
      
      this.setState ({
        grid: updatedGrid
      })
    }  

    render(){     
      const {grid} = this.state;  
      let cols = new Array(numCols).fill(0)

      let id = 0;
      
      return (
          <div>
            <p>                
                Test array: {testArr}
            </p>

            <button onClick={() => this.loadArray()}>
                Load Array
            </button>

            <div className="grid">            
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
                            key={id++} 
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

{/* Map can have three parameters: value, index, array */}