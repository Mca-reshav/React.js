import React, { useState } from "react";
import './App'
import Child from "./PreviousPropsChild";
function App(){
    const[count,setCount]=useState(0)
    return(
        <div className="App">
            <h1>Previous Props with Hook</h1>
            <Child data={count}/>
            <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Click Me</button>
        </div>
    )
}
export default App;