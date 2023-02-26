import React, { useState } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState(" See the Output");     //on entering
    const [print, setPrint] = useState(true);  //true or false

    function getData(item) {
        console.log(item.target.value)
        setData(item.target.value)
        setPrint(false)     // for hide on entering
    }
    return (
        <div className='App'>
            <h1>Hello React</h1>
            {
                print ? <h2>{data}</h2> : null
            }
            <input className='inputText' type="text" onChange={getData} />
            <button onClick={() => setPrint(true)}>Print</button>
        </div>
    )
}
export default App;