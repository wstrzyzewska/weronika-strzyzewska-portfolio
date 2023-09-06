import React from "react"

import Navbar from "./navbar";


export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar/>
            <div className="layout__content">
                { children }
            </div>
            <footer className="layout__footer">
                <p>Made by Weronika Strzyżewska, 2023</p>
            </footer>
        </div>
    )
}