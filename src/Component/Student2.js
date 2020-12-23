import React, { Component } from 'react'

export default class Student2 extends Component {

    handleClick=()=>{
        console.log('Button CLicked', this);
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
