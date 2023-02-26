//ForwardRef: Forward the Ref from one component to another
import React, { createRef } from "react";
import './App'
import User from './ForwardRef/User'
function App(){
    let inputRef=createRef(null)

    function updateInput(){
        inputRef.current.value="1000"
        inputRef.current.style.color="red"
    }
    return(
        <div className="App">
            <h1>Hello React</h1>
            <h2>ForwardRef</h2>
            <User Ref={inputRef}/>
            <button onClick={updateInput}>Update</button>
        </div>
    )
}
export default App;