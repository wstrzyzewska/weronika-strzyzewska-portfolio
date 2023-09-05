import React from "react";

import {aboutData} from "../data/about";
import Layout from "../components/Layout/Layout";

function About() {
    const { title, name, summary } = aboutData;

    return (
        <Layout>
            <section className="about">
                <span className="about__title">{ title }</span>
                <span className="about__name">{ name }</span>
                <span className="about__summary">{ summary }</span>
            </section>
        </Layout>

    )
}

export default About