import React, { Component } from 'react';
import Node from './Node/Node';
import Form from './Form';
import '../styles/styles.css';

import { clone, copy2dArrayOfObjects, modify } from './initial_setup/copyObjects';

let GraphNode = require('../dataStructures/GraphNode').default;
let createDefaultGrid = require('./initial_setup/createDefaultGrid').default;
let load_array = require('./initial_setup/loadArray').default;

let insertion_sort = require('../algorithms/insertion_sort').default;
let mergesort = require('../algorithms/mergesort').default;
let quicksort = require('../algorithms/quicksort').default;
let selection_sort = require('../algorithms/selection_sort').default;

let NUM_ROWS = 20
let NUM_COLS = 10
let SAMPLE_ARRAY = [ 9 , 2 , 7 , 5 , 8 , 4 , 3 , 1 , 6 ]

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
      NUM_ROWS = Math.max.apply(null, SAMPLE_ARRAY) + 2
      NUM_COLS = SAMPLE_ARRAY.length

      let grid = createDefaultGrid(NUM_ROWS, NUM_COLS);

      grid = load_array(grid, SAMPLE_ARRAY, NUM_ROWS, NUM_COLS, false)
      
      this.setState({
          grid: grid
      });
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

        this.loadArray(userArray, false)
    }

    loadArray(array, hashighlight) {           

      NUM_ROWS = Math.max.apply(null, array) + 2
      NUM_COLS = array.length

      let updatedGrid = createDefaultGrid(NUM_ROWS, NUM_COLS)
      
      updatedGrid = load_array(updatedGrid, array, NUM_ROWS, NUM_COLS, hashighlight)      
      
      this.setState ({
        grid: updatedGrid
      })
    }  

    visualizeInsertion(){
      let arrayToUse = [1]
      if (this.state.user_array.length != 0){
        arrayToUse = this.state.user_array.split(',').map(Number)
      } else {
        arrayToUse = SAMPLE_ARRAY
      }
      
      //TODO: modify insertion_sort to return [arr, footerNumToHighlight]
      let sortedSeq = insertion_sort(arrayToUse)
      // console.log(sortedSeq)
      this.animateInsertion(sortedSeq)

    }

    animateInsertion(sortedSeq) {
        
        for(let i in sortedSeq){
          let currArray = sortedSeq[i][0]  
          let highlightCol =  sortedSeq[i][1]  
          
          // console.log('HIGLIGTHED COL: ' + highlightCol)
          
          setTimeout(() => {            

            this.loadArray(currArray, true) 

            NUM_ROWS = Math.max.apply(null, currArray) + 2
            NUM_COLS = currArray.length
            let gridWithHighlight = this.state.grid            
            gridWithHighlight = this.highlightCol(gridWithHighlight, highlightCol, NUM_ROWS, NUM_COLS)
            this.setState ({
              grid: gridWithHighlight
            })
          
            
          }, 600 * i)
          // }, 5000 * i)
        }
    }

    highlightCol(grid, footerNumToHighlight, numRows, numCols){    
        //get idx of footerNum        
        let highlightIdx = 0
        let r = numRows-1
        let count = 0
                
        while(count < numCols){                  
          if(grid[numRows-1][count].value === footerNumToHighlight){                        
            highlightIdx = count
            break
          }
          count += 1
        }

        // console.log('HighlightIdx: ' + highlightIdx + ", footerNumToHighLight: " + footerNumToHighlight)

        count = 0
        let row = numRows-3      

        while(count < footerNumToHighlight && row >= 0) {
          
          grid[row][highlightIdx].isHighlighted = true              
          console.log(`Highlighting: grid[${row}][${highlightIdx}]. ` + 'HighlightIdx: ' + highlightIdx + ", footerNumToHighLight: " + footerNumToHighlight)

          count += 1
          row -= 1          
        }
          
        return grid
    }

    render(){     
      const {grid} = this.state;  
      let cols = new Array(NUM_COLS).fill(0)

      let id = 0;
      
      return (
          <div className="whole_page">
            <p>                
                Test array: 9,2,7,5,8,4,3,1,6
            </p>
 
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Enter comma seperated numbers (e.g. 1,3,2) </label>                                        
                    <input type='text' value={this.state.user_array} onChange={this.handleArrayChange}/>
                    <button type="submit">Enter</button>       
                </div>                         
            </form>  

            <button onClick={() => this.visualizeInsertion()}>
              Insertion Sort
            </button>

            <div className="grid">            
              {grid.map( (row, rowIdx) => {
                return (
                  <div key={rowIdx}>
                    {row.map((node, nodeIdx) => {                                
                      // obtaing the current node and create a div for it
                      const {value, row, col, active, isHighlighted} = node;
                      //TODO: if at the last row, figure out how to add numbers
                      if (row === NUM_ROWS - 1) {

                      }
                      return (
                        <Node 
                            key={id++} 
                            value={value}
                            row={row}
                            col={col}
                            maxRows={NUM_ROWS}
                            isActive={active}
                            isHighlighted={isHighlighted}
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