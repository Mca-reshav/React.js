import React, { useEffect, useState } from "react";
import './App'

function App(){
    const[data,setData]=useState(0);
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Data state is called")
    },[data])

    useEffect(()=>{
        console.log("Count is "+count)
    },[count])

    return(
    <div className="App">
        <h1>React useEffect</h1>
        <h3>Data:{data}</h3>
        <h3>Count:{count}</h3>
        <button onClick={()=>setData(data+1)}>Update Data</button>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>)
}
export default App;