import React from "react";

import Experience from "./sections/experience";
import Contact from "./sections/contact";
import About from "./sections/about";
import Hero from "./sections/hero";

import Layout from "./layout";

function App() {
  let sections = document.querySelectorAll("section");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;

      if (top >= offset && top < offset + height) {
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });
  };

  return (
    <div className="app">
      <Layout>
        <section className="app__hero">
          <Hero />
        </section>
        <section className="app__about">
          <About />
        </section>
        <section className="app__experience">
          <Experience />
        </section>
        <section className="app__contact">
          <Contact />
        </section>
      </Layout>
    </div>
  );
}

export default App;
