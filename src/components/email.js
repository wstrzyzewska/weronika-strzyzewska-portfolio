import React from "react"

import {email} from "../config";

export default function Email() {
    return (
        <div className="email">
            <a className="email__content" href={`mailto:${email}`}>Feel free to contact me</a>
        </div>
    )
}