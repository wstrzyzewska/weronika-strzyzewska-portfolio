import React from "react";

import Email from "../email";
import Footer from "../footer";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__details">
        <span className="contact__details__title">Feel free to contact me</span>
        <span className="contact__details__description">
          I'm currently looking for new job opportunities.
        </span>
        <Email />
      </div>
      <div className="contact__footer">
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
