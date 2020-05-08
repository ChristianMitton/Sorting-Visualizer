import React, { Component } from 'react';
import Node from './Node/Node';
import Form from './Form';
import '../styles/styles.css';

import { clone, copy2dArrayOfObjects, modify } from './initial_setup/copyObjects';
import loadArray from './initial_setup/loadArray';

let GraphNode = require('../dataStructures/GraphNode').default;
let createDefaultGrid = require('./initial_setup/createDefaultGrid').default;
let load_array = require('./initial_setup/loadArray').default;

let numRows = 20
let numCols = 10
let sampleArray = [ 9 , 2 , 7 , 5 , 8 , 4 , 3 , 1 , 6 ]

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            user_array: []
        };
    }

    componentDidMount() {
      // create grid when component is first rendered
      //? '+ 2' accounts for bar and footer
      numRows = Math.max.apply(null, sampleArray) + 2
      numCols = sampleArray.length

      let grid = createDefaultGrid(numRows, numCols);

      grid = load_array(grid, sampleArray, numRows, numCols)
      
      this.setState({
          grid: grid
      });
    }

    loadArray(array) {           

      numRows = Math.max.apply(null, array) + 2
      numCols = array.length

      let updatedGrid = createDefaultGrid(numRows, numCols)

      let grid = createDefaultGrid(numRows, numCols);

      grid = load_array(grid, array, numRows, numCols)
      
      this.setState({
          grid: grid
      });
      
      // ! change sample to user input array here
      updatedGrid = load_array(updatedGrid, array, numRows, numCols)      
      
      this.setState ({
        grid: updatedGrid
      })
    }  

    handleArrayChange = (event) => {
      let arr = event.target.value
      this.setState({
          user_array: arr
      })
    }

    handleSubmit = event => {
        // alert(`${this.state.user_array}`)
        event.preventDefault()
        //let userArray = Array.from(this.state.user_array)

        let userArray = this.state.user_array.replace(/\s/g, '').split(',')

        this.loadArray(userArray)
    }

    render(){     
      const {grid} = this.state;  
      let cols = new Array(numCols).fill(0)

      let id = 0;
      
      return (
          <div>
            <p>                
                Test array: {sampleArray}
            </p>
 
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Enter Array</label>                                        
                    <input type='text' value={this.state.user_array} onChange={this.handleArrayChange}/>
                    <button type="submit">Enter</button>       
                </div>                         
            </form>  

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