import React, { useState } from "react";
import { motion } from "framer-motion";

import portfolio from "../images/portfolio.png";

export default function Cards() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardImages = [portfolio];

  const cardTitles = ["Portfolio"];

  const cardDescriptions = [
    "Personal website build using Gatsby, React, Javascript, Sass and Framer-motion",
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
              <p className="card__content__description">
                {cardDescriptions[index]}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
