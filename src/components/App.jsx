import React from 'react'
// import { useEffect, useState } from 'react'
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
// import Footer from './Footer/Footer';
import {Fullpage, FullpageNavigation, FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";

function App() {
    // const [about, setAbout] = useState({});
    // const [contact, setContact] = useState({});
    // const [experience, setExperience] = useState({});
    // const [projects, setProjects] = useState({});

    const SectionsStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }


    return (
            <div className="app">
                <Fullpage>
                    <FullpageNavigation/>
                    <FullPageSections>
                        <FullpageSection style={{...SectionsStyle}}>
                            <About />
                        </FullpageSection>
                        <FullpageSection>
                            <Experience />
                        </FullpageSection>
                        <FullpageSection>
                            <Projects />
                        </FullpageSection>
                        <FullpageSection>
                            <Contact />
                        </FullpageSection>
                    </FullPageSections>

                </Fullpage>



            </div>
    );
}

export default App;