import React, {Component} from 'react';

import './App.css';

import Student from './Component/Student';


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Student roll='21'/> */}
        <Student roll = '21'/>
      </div>
    )
  }
}
