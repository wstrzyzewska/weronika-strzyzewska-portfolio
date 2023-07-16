import * as React from 'react'
import { useEffect, useState } from 'react'
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
    const [about, setAbout] = useState({});
    const [contact, setContact] = useState({});
    const [experience, setExperience] = useState({});
    const [projects, setProjects] = useState({});


    return (
            <div className="app">
                <About />
                <Experience /> 
                <Projects />
                <Contact />
                <Footer />
            </div>
    );
}

export default App;