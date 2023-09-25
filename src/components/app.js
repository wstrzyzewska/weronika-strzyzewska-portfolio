import React, { useEffect, useState } from "react";

import Experience from "./sections/experience";
import Contact from "./sections/contact";
import About from "./sections/about";
import Hero from "./sections/hero";
import Projects from "./sections/projects";

import Layout from "./layout";
import Loader from "./loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
}

export default App;
