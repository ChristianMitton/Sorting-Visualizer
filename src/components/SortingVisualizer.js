import React, { Component } from 'react';
import Node from './Node/Node';
import '../styles/styles.css';

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

    render(){     
      const {grid} = this.state;  
      let cols = new Array(numCols).fill(0)

      let count = 0;
      
      return (
          <div>
            <p>                
                Test array: {testArr}
            </p>

            <div className="grid">
            {/* Map can have three parameters: value, index, array */}
              {grid.map( (row, rowIdx) => {
                return (
                  <div key={rowIdx}>
                    {row.map((node, nodeIdx) => {                                
                      // obtaing the current node and create a div for it
                      const {value, row, col} = node;
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