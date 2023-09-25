import React from "react";

import Icon from "./icons/icons";
import { email } from "../config";

export default function Footer() {
    return (
            <footer className="footer">
                <hr />
                <a href="/" className="footer__logo">
                    <Icon type="Logo" />
                </a>
                <a className="footer__email" href={`mailto:${email}`}>
                    <Icon type="Mail" /> wstrzyzewska94@gmail.com
                </a>
                <div className="footer__contact">
                    <a
                        href="https://github.com/wstrzyzewska"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon type="Github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/weronika-strzyzewska/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon type="Linkedin" />
                    </a>
                    <a
                        href="https://www.instagram.com/wstrzyzewska/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon type="Instagram" />
                    </a>
                </div>
                <span className="footer__description">
          Made by Weronika Strzyżewska, 2023
        </span>
            </footer>
    );
}
