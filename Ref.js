//Ref: React recommend to not use Ref unusally, it basically manipulate the DOM directly that will hampers the performance. UseState and props instead of that, here manipulation means that changing the style or getting/setting the value forcefully.

import React, { Component, createRef } from "react";
import './App'

class App extends Component{
    constructor(){
        super();
        this.inputRef=createRef();
    }
    componentDidMount(){
        console.log(this.inputRef.current.value='Hello React');
    }
    getVal(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="red"
    }
    render(){
        return(
            <div className="App">
                <h1>Hello React</h1>
                <h2>Ref in React</h2>
                <input type="text" ref={this.inputRef}/>
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        )
    }
}
export default App