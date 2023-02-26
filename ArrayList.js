import { Alert, Table } from "react-bootstrap";
import React from "react";
import './App'
function App() {
    const Students = [{ name: "Ram", course: "MCA", city: "Mumbai", email: "ram@test.com", contact: 123 },
    { name: "Shyam", course: "MBA", city: "Kolkata", email: "shyam@test.com", contact: 12345 },
    { name: "Ganesh", course: "M.tech", city: "Delhi", email: "ganesh@test.com", contact: 123456 },
    { name: "Mahesh", course: "PhD", city: "Chennai", email: "mahesh@test.com", contact: 987654 }]

    return (
        <div className="App">
            <Alert variant="success"><h1>Handle array with list</h1></Alert>
            <Table striped variant="dark">
                <tbody>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Course</b></td>
                        <td><b>City</b></td>
                        <td><b>Email</b></td>
                        <td><b>Contact</b></td>
                    </tr>
                    {
                        Students.map((data, k) => {     //always use a unique key with this
                            return <tr key={k}>
                                <td>{data.name}</td>
                                <td>{data.course}</td>
                                <td>{data.city}</td>
                                <td>{data.email}</td>
                                <td>{data.contact}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default App;

//always use map function to use looping avoid to use for loop because it will get deprecated in return statement of functional statement