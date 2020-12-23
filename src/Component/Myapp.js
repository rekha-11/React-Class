import React, { Component } from 'react'
// import Myapp2 from './Myapp2';

export default class Myapp extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            address:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        return (
            <div>
                <input name='username' type="text" onChange={this.handleChange}/>
                <input name='address' type="text" onChange={this.handleChange}/>
                <br/>Username: {this.state.username}
                <br/>Address: {this.state.address}
            </div>
        )
    }
}

// export default Myapp;