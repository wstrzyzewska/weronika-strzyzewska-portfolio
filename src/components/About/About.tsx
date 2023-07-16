import * as React from "react"
import { useEffect, useState } from "react";

// const [isDesktop, setIsDesktop] = useState(false);
// const [isMobile, setIsMobile] = useState(false);

// useEffect(() => {
//   if (window.innerWidth > 769) {
//     setIsDesktop(true);
//     setIsMobile(false);
//   } else {
//     setIsMobile(true);
//     setIsDesktop(false);
//   }
// }, []);

function About() {
  return (
    <div className="about">
      <p>About me</p>
    </div>
  )
}

export default About