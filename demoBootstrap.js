import React from 'react';
import './App'
import { Button, Alert,Table } from 'react-bootstrap';
function App() {
    return (<div className='App'>
        <h1>Hello React-Bootstrap</h1>
        <Alert variant="warning">This is a warning alert by Bootstrap</Alert>
        <Button variant='success'>Click Me</Button><br/><br/>
        <Table variant='white' striped>
            <tbody>
                <tr>
                    <td><b>Language</b></td>
                    <td><b>Framework</b></td>
                    <td><b>Purpose</b></td>
                    <td><b>Development</b></td>
                </tr>
                <tr>
                    <td>Node.js</td>
                    <td>Express.js</td>
                    <td>Online Streaming, super fast rendering </td>
                    <td>Backend</td>
                </tr>
                <tr>
                    <td>JavaScipt</td>
                    <td>React.js</td>
                    <td>Less code more functionality</td>
                    <td>Frontend</td>
                </tr>
                <tr>
                    <td>JavaScipt</td>
                    <td>Angular</td>
                    <td>Full fleged Framework</td>
                    <td>Frontend</td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Django</td>
                    <td>AI enabled websites</td>
                    <td>Backend</td>
                </tr>
                <tr>
                    <td>Java</td>
                    <td>SpringBoot</td>
                    <td>Secure and Robust transaction </td>
                    <td>Backend</td>
                </tr>
                <tr>
                    <td>NoSql</td>
                    <td>MongoDB</td>
                    <td>Document and Collection based</td>
                    <td>Database</td>
                </tr>
                <tr>
                    <td>Sql</td>
                    <td>MySql</td>
                    <td>Row and Cols Table based</td>
                    <td>Database</td>
                </tr>
                <tr>
                    <td>PHP</td>
                    <td>Laravel</td>
                    <td>Small and medium rendering</td>
                    <td>Backend</td>
                </tr>
            </tbody>
        </Table>
    </div>)
}
export default App;