class GraphNode {
    constructor(value, row, col){
        this.value = value;
        this.row = row;
        this.col = col; 
        this.active = false;
        this.isHighlighted = false;   
    }
}

export default GraphNode;