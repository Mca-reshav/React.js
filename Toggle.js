//Hide and show
import React,{useState} from 'react'
import './App'
function App(){
    const[status,setStatus]=useState(true)
    return(
        <div className='App'>
            <h1>Hello React</h1>
            {
                status?<h3>Hello Reshav</h3>:null
            }
            <button onClick={()=>setStatus(!status)}>Hide/Show</button>
        </div>
    )
}
export default App;