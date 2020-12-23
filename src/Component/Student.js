import React, { Component } from 'react'
// import ReactDOM from 'react-dom'


export default class Student extends Component {
    state={
        name: "Rekha",
        roll: this.props.roll
    }

    handleChange = (event) =>{
        // console.log('Button Clicked', this);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleClick= (event) =>{
        this.setState((state,props)=>{
            console.log(state);

        });
    };

    render() {
        return (
            <div>
                <input type = 'text' name= 'name' onInput={this.handleChange}></input>
                <input type = 'number' name= 'roll' onInput={this.handleChange}></input>
                <button onClick={this.handleClick}>Click Me</button>
                <p>Name: {this.state.name}, Roll no: {this.state.roll}</p>


            </div>
        )
    }
}
