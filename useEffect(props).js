import React, { useEffect } from "react";
function User(props) {
    useEffect(()=>{
    alert("props alert for data:"+props.data)
    alert("props alert for count:"+props.count)
})
       
    
    return (
        <div className="App">
            <h2>User Component</h2>
            <h3>Data: {props.data}</h3>
            <h3>Count: {props.count}</h3>
        </div>)
}
export default User;