import React, { useRef } from "react";
import './App'

function App(){
    let inputRef=useRef(null)

    function handleInput(){
        console.log("Function Called",inputRef.current.value);
        inputRef.current.value="1000"
        inputRef.current.style.color="blue"
        //inputRef.current.focus();
        //inputRef.current.style.display="none"
    
    }
    return(
        <div className="App">
            <h1>Hello React</h1>
            <h2>UseRef Hook</h2>
            <input type="text" ref={inputRef}/>
            <button onClick={handleInput}>Handle Input</button>
        </div>
    )
}
export default App;