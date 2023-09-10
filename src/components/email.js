import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

export default function Email() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ws_portfolio",
        "template_ws_portfolio",
        form.current,
        "FoEtyEwYq37vZIw6p",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  }

  function openForm() {
    document.getElementById("form").style.display = "flex";
    document.getElementById("button").style.display = "none";
  }

  return (
    <div className="email">
      <button id="button" onClick={openForm}>
        Hit me up
      </button>

      <form
        id="form"
        ref={form}
        onSubmit={sendEmail}
        style={{ display: "none" }}
      >
        <input type="text" placeholder="Name" name="user_name" required />
        <input type="email" placeholder="Email" name="user_email" required />
        <input type="text" placeholder="Subject" name="subject" required />
        <textarea name="message"></textarea>
        <button className="email__form__button" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
}
