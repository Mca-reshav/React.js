//Controlling the input field using getElementById/QuerySelector or directly manipulate the DOM using Ref

import React, { useRef } from "react";
import './App'

function App(){
    let inputRef=useRef(null)

    function submitForm(e){
        e.preventDefault()
        console.log("Input1: ",inputRef.current.value)  //DOM manipulation using Ref
        let input2=document.getElementById('input2').value  //DOM manipulation using getElementByID
        console.log("Input2: ",input2)
    }
    return(
    <div className="App">
        <h1>Hello React</h1>
        <h2>UnControlled Component</h2>
        <form onSubmit={submitForm}>
            <label>Input1</label>
            <input type="text" ref={inputRef}/><br/>
            <label>Input2</label>
            <input type="text" id="input2"/><br/>
            <button>Submit</button>
        </form>
    </div>)
}
export default App;