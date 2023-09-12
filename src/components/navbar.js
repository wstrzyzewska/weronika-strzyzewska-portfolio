import React from "react";

import { Link } from "gatsby";
import { navLinks } from "../config";
import Icon from "./icons/icons";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="navbar__logo">
          <Icon type="Logo" />
        </a>
        <ol className="navbar__list">
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <li className="navbar__list__details" key={i}>
                <Link className="navbar__list__details__links" to={url}>
                  {name}
                </Link>
              </li>
            ))}
        </ol>
        <button className="navbar__resume">
          <a href="https://drive.google.com/file/d/1tXsYOrzZrgw8VAA5xz8Z86I2_VLokWls/view?usp=sharing" target="_blank" rel="noreferrer">
            Resume
          </a></button>
      </nav>
    </header>
  );
}
