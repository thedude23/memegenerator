import React, { Component } from "react"
import ReactDOM from "react-dom"

import "../../style.css"


function Header() {
    const styles = {
        display: {
            display: "inline-block",
        },
    }

    return (
        <header>
            <img 
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
            />
            <p>Meme Generator</p>
        </header>
    )
}

export default Header

