import React from "react";

import {Link} from "gatsby";
import {navLinks} from "../config";

export default function Navbar() {
    return (
        <ol>
            {navLinks &&
                navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                        <Link to={url}>{name}</Link>
                    </li>
                ))
            }
        </ol>
    )
}
