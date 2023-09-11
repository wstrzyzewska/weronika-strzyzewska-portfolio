import React from "react";

import Navbar from "./navbar";
import Icon from "./icons/icons";
import { email } from "../config";

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

      <div className="layout__content">{children}</div>

      <footer className="layout__footer">
        <hr />
        <span>Made by Weronika Strzyżewska, 2023</span>
        <a className="layout__footer__email" href={`mailto:${email}`}>
          <Icon type="Mail" /> wstrzyzewska94@gmail.com
        </a>
      </footer>
    </div>
  );
}
