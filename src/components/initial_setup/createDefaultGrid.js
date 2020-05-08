let GraphNode = require('../../dataStructures/GraphNode').default;

function createDefaultGrid(numRows, numCols){
    const grid = [];      
    for (let row = 0; row < numRows; row++){
        const currentRow = [];
        for(let col = 0; col < numCols; col++) {                
            const currentNode = new GraphNode(".", row, col);                              
            
            currentRow.push(currentNode);
        }
        grid.push(currentRow);
        //! At this point, each index contains a graphNode
    }
    return grid;
}

export default createDefaultGrid;