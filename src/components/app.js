import React from 'react'

import Experience from './sections/experience';
import Projects from './sections/projects';
import Contact from './sections/contact';
import About from "./sections/about";
import Hero from "./sections/hero";

import Layout from "./layout";

function App() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            // else {
            //     entry.target.classList.remove("show");
            // }
        })
    })

    const hiddenElements = document.querySelectorAll(`.hidden`);

    hiddenElements.forEach((el) => observer.observe(el));

    return (
            <div className="app">
                <Layout>
                    <section className="app__hero">
                        <Hero/>
                    </section>
                    <section className="app__about">
                        <About/>
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