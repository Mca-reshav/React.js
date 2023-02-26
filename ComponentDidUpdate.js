// you should always use a condition to avoid looping
//componentDidUpdate(prevProps,prevState,snapshot)

import React, { Component } from "react";
import { render } from "react-dom";
import './App'

class App extends Component{
    constructor(){
        super();
        this.state={active:null,who:null}
    }

componentDidUpdate(){
    console.log("componentDidUpdate")

    if(this.state.who==null){
        this.setState({who:"hello"})
    }
}
render(){
    return(
        <div className="App">
            <h1>Hello React</h1>
            <h3>React ComponentDidUpdate: {this.state.who}</h3>
            <button onClick={()=>{this.setState({active:"yes"})}}>Click Me</button>
        </div>
        
    )
}
}
export default App;