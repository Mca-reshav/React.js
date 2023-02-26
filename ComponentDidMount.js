//it has no effect of state and props

//it is only used to call APIs, it will run only once at a time of loading/mounting

import React, { Component } from "react";
import './App'

export default class App extends Component{
    constructor(){
        super();
        this.state={name:"reshav"}
    }
    componentDidMount(){
        console.log("ComponentDidMount")
    }
    render(){
        console.log("Render Method")
        return(
            <div className="App">
                <h1>Hello React</h1>
                <h2>Hello {this.state.name}</h2>
                <button onClick={()=>this.setState({name:"RESHAV"})}>update</button>
            </div>
        )
    }
}