import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // user_array: []
            user_array: ''
        }
    }

    handleArrayChange = (event) => {
        let arr = event.target.value
        this.setState({
            user_array: arr
        })
    }

    handleSubmit = event => {
        alert(`${this.state.user_array}`)
        event.preventDefault()
    }

    render() {
        // deconstructing state properties
        // const { user_array } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Enter Array</label>                    
                    {/* <input type='text' value={user_array} onChange={this.handleArrayChange}/> */}
                    <input type='text' value={this.state.user_array} onChange={this.handleArrayChange}/>
                    <button type="submit">Enter</button>       
                </div>                         
            </form>            
        )
    }
}

export default Form;