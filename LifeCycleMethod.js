/*Life cycle method: generally for the life cycle method we use class component, but to use with the functional component we should use the hooks

There are three stages of life cycle methods :    Mount  >>         Update  >>               Unmount
                                                componenDidMount    componentDidUpdate     componentWillUnmount
whenever a previous life cycle is destroyed it will restart the entire process from the beginning
*/


//component get ready and passing some props

import React,{useState,Component} from "react";
import './App'

function App(){
    const[data,setData]=useState("react")
    return(
        <div className="App">
            <h1>Hello React</h1>
            <User name={data}/>
            <button onClick={()=>setData("REACT")}>Update</button>
        </div>
    )
}
export default App;

class User extends Component{
    render(){
        console.log("Render Method "+ this.props.name)
        return(
            <div className="App">
                <h2>User Component: {this.props.name}</h2>
            </div>
        )
    }
}
