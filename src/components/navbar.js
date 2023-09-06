import React, {useEffect, useState} from "react";

import {Link} from "gatsby";
import {navLinks} from "../config";

// const links = [
//     {
//         label: 'About',
//         href: '/#about',
//     },
//     {
//         label: 'Work',
//         href: '/#work',
//     },
// ];

export default function Navbar() {

    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY >= 200) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", setFixed)
        return () => window.removeEventListener("scroll", setFixed);
    })

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
            </nav>
        </header>
    )
}
