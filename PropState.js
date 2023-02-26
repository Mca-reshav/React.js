import React, { useState } from "react";
import './App.css'

function App(){
    const[data,setData]=useState("reshav")

    return(
        <div className="App">
            <h1>Props in React</h1>
            <Student name={data}/>
            <button onClick={()=>{setData("RESHAV")}}>Update</button>
        </div>
    )
}

function Student(props){
    return(
        <div className="App">
            <h3>{props.name}</h3> 
        </div>
    )
}

export default App;