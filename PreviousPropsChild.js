import React,{useRef,useEffect} from "react";
import './App'
function App(props){
    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.data  //current is fixed
    })
    const previousProps=lastVal.current //it will get value firstly by using useRef
    return(
        <div className="App">
            <h2>Current Val: {props.data}</h2>
            <h2>Previous Val: {previousProps}</h2>
            <h2>Difference: {props.data-previousProps}</h2>
        </div>
    )
}
export default App;