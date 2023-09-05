import React from "react";

import {Link} from "gatsby";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__element">
                <Link to="/about">About</Link>
            </div>
            <div className="navbar__element">
                <Link to="/experience">Experience</Link>
            </div>
            <div className="navbar__element">
                <Link to="/projects">Projects</Link>
            </div>
            <div className="navbar__element">
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
