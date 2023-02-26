//Controlling the input fields using states
import React, { useState } from "react";
import './App'

function App(){
    let [val,setVal]=useState(null)
    return(
    <div className="App">
        <h1>Hello React</h1>
        <h2>Controlled Component</h2>
        <h3>Value: {val}</h3>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
    </div>)
}
export default App;