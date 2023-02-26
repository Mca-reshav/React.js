import React, { useState } from "react";
import './App'
import Child from './FragmentChild'
import { Table, Alert,Button} from 'react-bootstrap'

function App() {
    const [toggle,setToggle]=useState(null)
    const data = [{ fname: "HELLO", lname: "REACT" }, { fname: "Hey!", lname: "React-Native" }]
    
    function show(){
        
        setToggle("react")
        console.log("hello",toggle)
    }
    return (
        <div className="App">
            <Alert variant="success"><h1>React Fragment</h1></Alert>
            <Table striped variant="dark">
                <tbody>
                    {
                        data.map((data, i) =><tr key={i}><td>{i}</td><Child msg={data}/></tr>
                        )
                    }

                </tbody>
            </Table>
            <Button onClick={show} variant="primary">Toggle</Button>
        </div>
    )
}
export default App;