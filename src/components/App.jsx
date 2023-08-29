import React from 'react'

import {Fullpage, FullpageNavigation, FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";

import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Menu from "./Menu/Menu";

function App() {

    return (
            <div className="app">
                <Fullpage>
                    <Menu />
                    <FullpageNavigation/>
                    <FullPageSections>
                        <FullpageSection>
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