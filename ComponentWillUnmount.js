// it needs atleast two components, it work with function, remove api, setInterval and setTimeout

import React, { Component } from "react";
import './App'
export class student extends Component{
    componentWillUnmount(){
        console.log("componentWillUnmount is called")
    }
    render(){
        return(
            <div className="App">
                <h2>Student Component</h2>
            </div>
        )
    }
}

 export default class App extends Component{
    constructor(){
        super();
        this.state={}

    }
    render(){
        return(
            <div className="App">
                <h1>App Component</h1>
            </div>
        )
    }
}