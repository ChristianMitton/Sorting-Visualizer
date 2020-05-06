import React, { Component } from 'react';
import Node from './Node/Node';
import '../styles/styles.css';

let GraphNode = require('../dataStructures/GraphNode').default;

let numRows = 30
let numCols = 30

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: []
        };
    }

    componentDidMount() {
      // create grid when component is first rendered
      const grid = this.createDefaultGrid();
      
      this.setState({
          grid: grid
      });
  }

    testArr = [ 9 , 2 , 7 , 5 , 8 , 4 , 3 , 1 , 6 ]

    render(){     
      const {grid} = this.state;  
      let count = 0;
      
      return (
          <div>
          <p>                
              Test array: {this.testArr}
          </p>
          
          <div className="grid">
          {/* Map can have three parameters: value, index, array */}
              {grid.map( (row, rowIdx) => {
                  return (
                      <div key={rowIdx}>
                          {row.map((node, nodeIdx) => {                                
                              // obtaing the current node and create a div for it
                              const {value, row, col} = node;
                              return (
                                  <Node 
                                      key={count++} 
                                      value={value}
                                      row={row}
                                      col={col}
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

    createDefaultGrid(){
      const grid = [];
      for (let row = 0; row < numRows; row++){
          const currentRow = [];
          for(let col = 0; col < numCols; col++) {                
              const currentNode = new GraphNode("", row, col);                              
              
              currentRow.push(currentNode);
          }
          grid.push(currentRow);
          //! At this point, each index contains a graphNode
      }
      return grid;
  }
}

export default SortingVisualizer;