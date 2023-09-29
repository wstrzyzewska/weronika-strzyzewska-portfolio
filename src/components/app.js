import React from "react";

import Experience from "./sections/experience";
import Contact from "./sections/contact";
import About from "./sections/about";
import Hero from "./sections/hero";
import Projects from "./sections/projects";

import Layout from "./layout";

function App() {
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
          <section className="app__projects">
            <Projects />
          </section>
          <section className="app__contact">
            <Contact />
          </section>
        </Layout>
    </div>
  );
}

export default App;
