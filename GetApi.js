import React, { useEffect, useState } from "react";
import {Table,Alert} from 'react-bootstrap'
import './App'
function App(){
    const[data,setData]=useState([])
    useEffect(()=>{
        //fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
            fetch("data.json").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])
    console.log(data)
    return(
        <div className="App">
           <Alert variant="success"><h2>Get API Call</h2></Alert> 
            <Table variant="grey" striped>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                    {
                        data.map((item,i)=>
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{item.name}</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default App