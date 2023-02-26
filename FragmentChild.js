import React from "react";
import './App'

function Child(props) {
    return (
        /*<div>
            <td>Hello</td>
            <td>React</td>
            <td>Fragment</td>
        </div>*/
        <>
                <td>{props.msg.fname}</td>
                <td>{props.msg.lname}</td>
                <td>Fragment</td>

        </>
    )
}
export default Child;

// it will throw an error to resolve it we should use fragment