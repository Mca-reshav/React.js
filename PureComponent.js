//Pure component: It basically matches the value of current state with updated state, if both of them is same then do nothing, if not then update once and re-match again.

// It is a part of class component, so it will halts the re-rendering of component

import React,{PureComponent} from "react";
import './App'

class App extends PureComponent {     // use component and pure component to see the effect

    constructor(){
        super();
        this.state={count:0}
    }
    
    render() {
        console.log("Re-rendering")
        return (
            <div className="App">
                <h1>Hello React</h1>
                <h2>Pure Component {this.state.count}</h2>
                <button onClick={()=>this.setState({count:1})}>Click Me</button>
            </div>
        )
    }
}


export default App;