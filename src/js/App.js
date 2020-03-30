import React from "react"
import ReactDOM from "react-dom"

import "../style.css"

import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"


function App() {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default App