import React, { Component } from 'react';

import './styles.css';

class Node extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render() {
        const {
            value, 
            row, 
            col, 
            maxRows
        } = this.props;        
        //? assign class depending on value passed to prop using terinary operator
        //! <true/false statement> ? <if true, this runs> : <if false, this runs> ;
        // const extraClassName = isStart 
        // ? 'node-start' 
        // : isFinish 
        // ? 'node-finish'
        // : visited
        // ? 'node-visited'
        // : isWall
        // ? 'node-wall'
        // : "";
        console.log(`row:${row}, col:${col}, maxRows:${maxRows}`)
        let extraClassName = ''
        if (row == maxRows-1){
            extraClassName = 'footer'                        
        }
        {console.log(extraClassName)}
        return (
            //assigning multiple classNames to a Node            
            <div className={`node ${extraClassName}`}>
                    {/* {value} */}
                    1
            </div>
        )
    }
}

export default Node;
// export const DEFAULT_NODE = {
//     row: 0,
//     col: 0,
// };

/*
    onMouseDown happens when you press you're mouse button, not when you release it
    onMouseUp happens when you release
    onClick happens when you press and release    
    mouseEnter happens when you hover above an element
*/