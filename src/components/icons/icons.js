import React from "react"
import PropTypes from "prop-types";

import Linkedin from "./linkedin";
import Instagram from "./instagram";
import Github from "./github";
import Javascript from "./javascript";
import Paperplane from "./paperplane";
import Typescript from "./typescript";
import Wordpress from "./wordpress";
// import Html from "./html";
import Angular from "./angular";
import ReactIcon from "./react";


const Icon = ( {type} ) => {
    switch (type) {
        case "Github":
            return <Github />;
        case "Instagram":
            return <Instagram />;
        case "Linkedin":
            return <Linkedin />;
        case "Angular":
            return <Angular />;
        // case "Html":
        //     return <Html />;
        case "Javascript":
            return <Javascript />;
        case "Paperplane":
            return <Paperplane />;
        case "ReactIcon":
            return <ReactIcon />;
        case "Typescript":
            return <Typescript />;
        case "Wordpress":
            return <Wordpress />;
    }
};

Icon.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Icon;