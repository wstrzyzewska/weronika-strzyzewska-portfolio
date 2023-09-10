import React from "react";

import {Link} from "gatsby";
import {navLinks} from "../config";

export default function Navbar() {

    return (
        <header>
            <nav className="navbar">
                <a href="/" className="navbar__logo">Logo</a>
                <ol className="navbar__list">
                    {navLinks &&
                        navLinks.map(({ url, name }, i) => (
                            <li className="navbar__list__details" key={i}>
                                <Link className="navbar__list__details__links" to={url}>{name}</Link>
                            </li>
                        ))
                    }
                </ol>
                <button className="navbar__resume">Resume</button>
            </nav>
        </header>
    )
}
