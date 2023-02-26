//Fragment: a common pattern in react is for a component to return multiple elements, it let you to group a list of children without adding extra nodes to the DOM

import React from "react";
import './App'

function App(){
    /*return(<div className="App">
        <h1>Hello </h1>
        <h1>React</h1>
    </div>)*/

    return(
    <>
    <h2>Hello</h2>
    <h2>React</h2>
    </>
    )
}
export default App;

// we see extra div tag is created

//actual use of fragment is with child components

//you can use fragment anywhere like parent to child or inverse

// if you are using fragment then you cannot use classname or id but key can