import { Alert, Table } from "react-bootstrap";
import React from "react";
import './App'
function App() {
    const Students = [{
        name: "Ram", course: "MCA", email: "ram@test.com", contact: 123, address: [{ country: "IND", city: "Dehli" },
        { country: "US", city: "NewYork" }]
    },
    {
        name: "Shyam", course: "MBA", email: "shyam@test.com", contact: 12345, address: [{ country: "IND", city: "Kolkata" },
        { country: "UK", city: "London" }]
    },
    {
        name: "Ganesh", course: "M.tech", email: "ganesh@test.com", contact: 123456, address: [{ country: "IND", city: "Mumbai" },
        { country: "FRC", city: "Paris" }]
    },
    {
        name: "Mahesh", course: "PhD", email: "mahesh@test.com", contact: 987654, address: [{ country: "IND", city: "Chennai" },
        { country: "AUS", city: "Melbourne" }]
    }]

    return (
        <div className="App">
            <Alert variant="success"><h1>Hello React</h1><Alert variant="warning"><h1>Nested list with nested array</h1></Alert></Alert>
            <Table striped style={{backgroundColor:"lightyellow"}}>
                <tbody>
                    <tr>
                        <td><b>Sno.</b></td>
                        <td><b>Name</b></td>
                        <td><b>Course</b></td>
                        <td><b>Email</b></td>
                        <td><b>Contact</b></td>
                        <td><b>Address</b></td>
                    </tr>
                    {
                        Students.map((data, k) => {     //always use a unique key with this
                            return <tr key={k}>
                                <td>{k + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.course}</td>
                                <td>{data.email}</td>
                                <td>{data.contact}</td>
                                <td>
                                    <Table striped >
                                        <tbody >
                                            {
                                                data.address.map((add, i) => {
                                                    return <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>{add.country}</td>
                                                        <td>{add.city}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </Table>

                                </td>
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

