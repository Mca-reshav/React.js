//Props: As we use function and pass some data similarly when we use component and want to pass some data we should use props

import './App.css'

function Student(props) {
    
    return (

        <div className='App'>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Enroll</th>
                    <th>Course</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.enroll}</td>
                    <td>{props.course}</td>
                    <td>{props.details.city}</td>
                    <td>{props.details.email}</td>
                    <td>{props.details.cno}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}


function App() {
    return (
        <div className='App'>
            <h1>Props in React</h1>
            <Student name={"Ram"}
                enroll={123}
                course={"MCA"}
                details={{ city: "Delhi", email: "ram@gmail.com", cno: 321 }} />
            <Student name={"Shyam"}
                enroll={456}
                course={"MBA"}
                details={{ city: "Mumbai", email: "shyam@gmail.com", cno: 654 }} />
        </div>
    )
}
export default App
