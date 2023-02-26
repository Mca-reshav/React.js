import React from "react";
import User from './ReuseComponent/User'
import './App'

function App(){
    const users=[{name:"Ram",email:"ram@test.com",contact:123},
    {name:"Shyam",email:"shyam@test.com",contact:321},
    {name:"Ganesh",email:"ganesh@test.com",contact:312},
    {name:"Shiva",email:"shiva@test.com",contact:132}]
    return(
        <div className="App">
            <h2>ReuseComponent</h2>
            {
                users.map((item)=><User data={item}/>
                
                )
            }
        </div>
    )
}
export default App;