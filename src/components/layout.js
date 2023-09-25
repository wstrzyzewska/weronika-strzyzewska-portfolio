import React from "react";

import Navbar from "./navbar";
import Icon from "./icons/icons";
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
    </div>
  );
}
