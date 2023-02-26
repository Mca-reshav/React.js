//component get ready and state
import React, { Component } from "react";
import './App'

export default class App extends Component{
    constructor(){
        super();
        this.state={name:"hello"}

    }
    render(){
        console.log("Render Method "+ this.state.name)
        return(
            <div className="App">
                <h1>Hello React</h1>
                <button onClick={()=>this.setState({name:"HELLO"})}>update</button>
            </div>
        )
    }
}