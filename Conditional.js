import React,{useState} from "react";
import './App'

function App(){

    return(
        <div className="App">
            <h1>Hello React</h1>
            <Profile/>
        </div>
    )
}
export default App;

function Profile(){
    const[loggedIn,setLoggedIn]=useState(1)
    return(
        <div className="App">
            {loggedIn==1?<h2>User 1</h2>:loggedIn==2?<h2>User2</h2>:<h2>User3</h2>}
            <button onClick={()=>setLoggedIn(loggedIn+1)}>update</button>
        </div>
    )
}