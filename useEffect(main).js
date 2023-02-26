import React, { useEffect, useState } from "react";
import './App'
import User from "./useEffect(props)";
function App(){
    const [data,setData]=useState(0);
    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log("Data is called",data)
    },[data])

    useEffect(()=>{
        console.log("Count is called",count)
    },[count])
    return(
        <div className="App">
            <h1>Main Component</h1>
           
            <button onClick={()=>setData(data+1)}>Update Data</button>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <User count={count} data={data}/>
        </div>
    )
}
export default App;