import React, { useState } from 'react'
import './App'

function App(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[tnc,setTnc]=useState(false)
    const[interest,setInterest]=useState("")

    function getFormData(data){
        console.log(name,email,tnc,interest)
        data.preventDefault();
    }
    return(
        <div className='App'>
            <h1>Hello React</h1>
            <h2>Handle Basic Form in React</h2>

            <form onSubmit={getFormData}>

                <label><b>Name: </b></label>
                <input type="text" placeholder="Enter your name" value={name} onChange={(data)=>setName(data.target.value)}/><br/>

                <label><b>Email: </b></label>
                <input type="email" placeholder="Enter your email" value={email} onChange={(data)=>setEmail(data.target.value)}/><br/>

                <label><b>Choose your interest</b></label>
                <select onChange={(data)=>setInterest(data.target.value)}>
                    <option>---select---</option>
                    <option>PhD</option>
                    <option>MS</option>
                    <option>M.tech</option>
                </select><br/>

                <label>Accept the Terms and Conditions</label><br/>
                <input type="checkbox" onChange={(data)=>setTnc(data.target.checked)}/><br/><br/>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default App;