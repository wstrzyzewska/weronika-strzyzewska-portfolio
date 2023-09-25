import React, { useState } from "react";
import { motion } from "framer-motion";

import portfolio from "../images/portfolio.png";

export default function Cards() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardImages = [portfolio];

  const cardTitles = ["Personal portfolio"];

  const cardDescriptions = [
    "My professional portfolio - a comprehensive showcase of my experience and ongoing skill development as a " +
      "Front-End Developer.",
  ];
  const cardTechStack = [
      "Tech stack: Gatsby, React, Netlify, Javascript, Sass, HTML5, animate.css, Framer-motion",
  ];

  const cardLink = [
    "https://github.com/wstrzyzewska/weronika-strzyzewska-portfolio",
  ];

  const cardLinkDescription = [
    "Tech stack: Gatsby, React, Netlify, Javascript, SCSS, HTML5, animate.css, Framer-motion",
  ];

  return (
    <div className="cards">
      {[0].map((index) => (
        <motion.div
          key={index}
          className={`card ${
            index === expandedIndex ? "expanded" : "collapsed"
          }`}
          anime={index === expandedIndex ? "expanded" : "collapsed"}
          transition={{ duration: 0.5 }}
          onClick={() => handleCardClick(index)}
          style={{
            backgroundImage: `url(${cardImages[index]})`,
          }}
        >
          <div className="card__content">
            <h2 className="card__content__title">{cardTitles[index]}</h2>
            {index === expandedIndex && (
              <div>
                <p className="card__content__description">
                  {cardDescriptions[index]}
                </p>
                <p className="card__content__stack">{cardTechStack[index]}</p>
                <a href={cardLink[index]} className="card__content__link">
                  {cardLinkDescription[index]}
                </a>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
