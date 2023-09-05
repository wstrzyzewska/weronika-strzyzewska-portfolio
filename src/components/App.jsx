import React from 'react'

import Experience from '../pages/experience';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import Navbar from "./Navbar/Navbar";
import About from "../pages/about";

function App() {

    return (
            <div className="app">
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
            </div>
    );
}

export default App;