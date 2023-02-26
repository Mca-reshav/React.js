import React,{Component} from 'react'
import './App.css'

class Student extends Component {
    render() {
        return (
            <div className='App'>
                <table>
                    <tbody>
                    <tr className='heading' >
                        <td><b>Name</b></td>
                        <td ><b>Email</b></td>
                    </tr>
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.email}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <h1>Props with Class Component</h1>
            <Student name="Ramesh" email="ramesh@gmail.com" />
            <Student name="Suresh" email="suresh@gmail.com" />
            <Student name="Ganesh" email="ganesh@gmail.com" />
        </div>
    )
}
export default App;