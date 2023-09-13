import React from "react";
import Icon from "./icons/icons";
import {motion} from "framer-motion";

const Path = (props) => (
    <motion.path
        strokeLinecap="round"
        strokeWidth="2"
        {...props}
    />
);

const transition = { duration: 0.33 };

export default function MobileNav({ toggle, isOpen }) {
    return (
        <div className="mobilenav__hamburger__button" onClick={toggle}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5", },
                        open: { d: "M 3 16.5 L 17 2.5", },
                    }}
                    transition={transition}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={transition}
                />
                <Path
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346", },
                        open: { d: "M 3 2.5 L 17 16.346", },
                    }}
                    transition={transition}
                />
            </svg>
        </div>
    )
}