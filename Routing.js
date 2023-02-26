//visit: reactrouter.com/web/example/basic
//install react-router-dom

//routing setup: make separate page for component and provide some link for proper functionality

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App'
import { Home } from "./Routing/Home";
import { About } from "./Routing/About";
import { Profile } from "./Routing/Profile";
import { PageNotFound } from "./Routing/PageNotFound";
import { Header } from "./Routing/Header";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App