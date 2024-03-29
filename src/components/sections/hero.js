import React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Hero() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section onMouseMove={handleMouseMove} className="hero">
      <motion.div
        className="hero__background"
        style={{
          background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, #9b25b6 0%, #400872 40%, transparent 80%)`,
        }}
      />
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={isVisible ? "animate__animated animate__fadeInLeft" : ""}
          >
            <span className="hero__title">Weronika Strzyżewska</span>
            <span className="hero__description">Front-End Developer</span>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
}

export default Hero;
