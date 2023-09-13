import React from "react";

import Navbar from "./navbar";
import Icon from "./icons/icons";
import { email } from "../config";
import { MobileNavLinks } from "./mobileNavLinks";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__contact">
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

      <Navbar />
      <MobileNavLinks />

      <div className="layout__content">{children}</div>

      <footer className="layout__footer">
        <hr />
        <a href="/" className="layout__footer__logo">
          <Icon type="Logo" />
        </a>
        <a className="layout__footer__email" href={`mailto:${email}`}>
          <Icon type="Mail" /> wstrzyzewska94@gmail.com
        </a>
        <div className="layout__footer__contact">
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
        <span className="layout__footer__description">
          Made by Weronika Strzyżewska, 2023
        </span>
      </footer>
    </div>
  );
}
