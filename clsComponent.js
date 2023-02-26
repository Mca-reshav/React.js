import React,{Component} from 'react'

//to use state with functional component is much easier than the class component, to work with we should constructor method

export class Cls extends Component{
    constructor(){
        super();
        this.state={data:0}
        this.state={value:0}
    }
    
    UpdateData(){
        this.setState({data:"Reshav Kr.Gupta"})
        console.log("Name is "+this.state.data)
    }
    UpdateValue(){
        this.setState({value:this.state.value+1})
        console.log(this.state.value+1)
       
    }
    render(){
        return(
            <div className='App'>
                <h2>{this.state.data}</h2>

                <h2>{this.state.value}</h2>
                <button onClick={()=>this.UpdateValue()} onDoubleClick={()=>this.UpdateData()}>Update</button>
            </div>
        )
    }
}