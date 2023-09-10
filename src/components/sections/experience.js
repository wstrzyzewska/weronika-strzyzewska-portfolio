import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";


function Experience() {

    // const experienceDetails = [
    //     { experience: "blabla", company: "Bitcoin Technologies" },
    //     { experience: "blablabla", company: "Sii"}
    // ]
    //
    // const tabs = ["Bitcoin Technologies", "Sii"];
    //
    // const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <section id="experience" className="experience">
                <div className="experience__card">
                    <nav>
                        <ul>

                        </ul>
                    </nav>
                    <main>
                        <AnimatePresence mode="wait">
                            <motion.div>

                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
        </section>
    )
}

export default Experience