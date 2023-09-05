import React from "react"

import Navbar from "../Navbar/Navbar";


export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar/>
            <div className="layout__content">
                { children }
            </div>
            <footer>
                <p>Werooooonika</p>
            </footer>
        </div>
    )
}