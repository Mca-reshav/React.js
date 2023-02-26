import React, { Component} from "react";
import './App'
import { CommonContext } from "./Components/CommonContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import UpdateButton from "./Components/UpdateButton";
class App extends Component {
    constructor(){
        super();
        this.updateColor=(color)=>{
            this.setState({color:color})
        }
        this.state={color:"green",updateColor:this.updateColor}
    }
    render() {
        return (
            <div className="App">
                <CommonContext.Provider value={this.state}>
                <Header />
                <CommonContext.Consumer>
                    {
                        ({color})=>(<h1 style={{backgroundColor:color}}>Body</h1>)
                    }
                </CommonContext.Consumer>
                <Main />
                <UpdateButton/>
                <Footer />
                </CommonContext.Provider>
                
            </div>
        )
    }

}
export default App;