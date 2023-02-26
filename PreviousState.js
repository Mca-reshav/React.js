import React,{ useState } from 'react'
import './App'
function App(){
    const[count,setCount]=useState(0)
    function updateCounter(){
        let random=Math.floor(Math.random()*10)
        setCount((pre)=>{
            console.log(pre)
            if(pre<5){
                alert("Low value: "+count)
            }
            return random;
        })/*
        for(let i=0;i<5;i++){
            setCount((pre)=>pre+1)
        }*/
    }
    return (
        <div className='App'>
            <h2>Previous State: {count}</h2>
            <button onClick={updateCounter}>Update Counter</button>
        </div>
    )
}
export default App;