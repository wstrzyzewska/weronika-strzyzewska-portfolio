import React from "react";

import Email from "../email";

function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="contact__title">Feel free to contact me</span>
      <span className="contact__description">
        I'm currently looking for a new job opportunities in GTA, Canada.
      </span>
      <div>
        <Email />
      </div>
    </section>
  );
}

export default Contact;
