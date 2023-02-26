// useMemo is a hook to use pure component in the functional component
//When we are working with state and props, sometimes component gets re-rendering(update) usually to control this we use useMemo

import React, { useState,useMemo} from "react";
import './App'
import {Alert,Button} from 'react-bootstrap'
function App(){
    const[count,setCount]=useState(0)
    const[item,setItem]=useState(1)

    const multiCountMemo=useMemo(function multiCount(){
        console.log("MultiCount")
        return count*2
    },[count])
    return(
        <div className="App">
            <Alert variant="primary"><h1>Hello React</h1><h2>UseMemo Hook</h2></Alert>
            <h3>Count: {count}</h3>
            <h3>Item: {item}</h3>
            <h4>MultiCountMemo: {multiCountMemo}</h4>
            <Button onClick={()=>setCount(count+1)}>Update Count</Button>
            <Button onClick={()=>setItem(item*2)}>Update Item</Button>
        </div>
    )
}
export default App;

// it will arise a problem, when we click on count or item both of time it will call function multicount, to control this we use useMemo hook