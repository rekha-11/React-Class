import React, { Component } from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import Myapp from './Myapp';
import Apicall from './Apicall';
export default class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path= "/" exact>
                            <Myapp.js/>
                        </Route>
                        <Route path= "/api" exact>
                            <Apicall/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
