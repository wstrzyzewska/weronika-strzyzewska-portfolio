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
          <a
            href="https://docs.google.com/document/d/1hXP8kVLYGF427QVMMuwj6AKz8Zq8K1Er/edit?usp=drive_link&ouid=114660087232658650151&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </button>
      </nav>
    </header>
  );
}
