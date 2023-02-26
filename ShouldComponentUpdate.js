//shouldComponentUpdate: it will ask you to whether update or not. It can stop rendering.Use with state and props. Its by default behaviour is to not update the component

import React, { Component } from 'react'
import './App'

export default class App extends Component{
    constructor(){
        super();
        this.state={count:0}
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate",this.state.count);
           if (this.state.count>5 && this.state.count<10){
                return true;
        }
              //by default False
    }
    render(){
        return(
            <div className='App'>
                <h1>Hello React</h1>
                <h3>ShouldComponentUpdate: {this.state.count}</h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update</button>
            </div>
        )
    }
}

