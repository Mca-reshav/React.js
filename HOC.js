//HOC: High Order Component- a component that takes a component as props and gives an output component as result 
import React, { useState } from "react";
import './App'
function App(){
    
    return(
        <div className="App">
            <h1>Hello React</h1>
            <h2>High Order Component</h2>
            <HOCred cmp={Counter}/>
            <HOCgreen cmp={Counter}/>
            <HOCblue cmp={Counter}/>
        </div>
    )
}
function HOCred(props){
    return(
        <div className="App">
            <h3 style={{color:"red"}}>Red Counter<props.cmp/></h3>
        </div>
    )
}
function HOCgreen(props){
    return(
        <div className="App">
            <h3 style={{color:"green"}}>Green Counter<props.cmp/></h3>
        </div>
    )
}
function HOCblue(props){
    return(
        <div className="App">
            <h3 style={{color:"blue"}}>Blue Counter<props.cmp/></h3>
        </div>
    )
}
function Counter(){
    const[count,setCount]=useState(0)
    return (
        <div className="App">
            <h3>Counter: {count}</h3>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}
export default App