import React, { useState } from "react";
import { navLinks } from "../config";
import MobileNav from "./mobileNav";
import { Link } from "gatsby";
import Icon from "./icons/icons";

export function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mobilenav">
      <a href="/" className="mobilenav__logo">
        <Icon type="Logo" />
      </a>
      <div className="mobilenav__hamburger">
        <MobileNav isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
          <ol className="mobilenav__list">
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li className="mobilenav__list__details" key={i}>
                  <Link className="mobilenav__list__details__links" to={url}>
                    {name}
                  </Link>
                </li>
              ))}
          </ol>
        )}
      </div>
    </div>
  );
}
