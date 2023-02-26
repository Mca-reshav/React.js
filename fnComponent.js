//state: state is used for both functional and class component, it act same as a variable, used to store data whenever we use variable the component will not get updated.

//component re rendering in react when we use hooke like useState to maintain the state in functional component
import{useState} from'react'

function FnComponent(){
    let data="Reshav";

    function updateData(){
        data="Reshav Kr. Gupta";
        alert(data);
    }
    return(
        <div className="App">
            <h2>{data}</h2>
            <button onClick={updateData}>Update Data</button>
        </div>
    )
}

export default FnComponent;

//here we can see that the data is not get updated even it had changed in function updateData, for this reason we should use the state 



export function StateApp(){
    const[value,setValue]=useState(0);
    //const[value,setValue]=useState("Reshav");

    function updateValue(){
        setValue(value+1);
        //setValue("Reshav Kr.Gupta")
        console.log("Value is "+ value)
    }
    return(
        <div className='App'>
            <h2>{value}</h2>
            <button onClick={updateValue}>Update Value</button>
        </div>
    )
}


