import React from "react";

import Layout from "../components/layout";
import Email from "../components/email";

function Contact () {

    return (
        <Layout>
            <section className="contact">
                <span className="contact__title">Get In Touch</span>
                <span className="contact__description">I'm currently looking for a new job opportunities in GTA, Canada. Feel free to contact me.</span>
                <div>
                    <Email/>
                </div>
            </section>
        </Layout>
    )
}

export default Contact