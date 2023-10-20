import React from "react";
import Icon from "../icons/icons";
import "animate.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__box">
        <div className="about__box__details">
          <span className="about__welcome">Hello, my name is </span>
          <span className="about__name">Weronika Strzyżewska</span>
          <span className="about__description">
            I am a highly motivated and detail-oriented developer with few years
            of experience in designing and implementing intuitive user
            interfaces. My proficiency lies in HTML, CSS, Typescript, and
            JavaScript, and I possess a strong foundation in front-end
            frameworks such as React and Angular. Additionally, I have a solid
            understanding of WordPress, a popular content management system, and
            can create custom themes and plugins to enhance website
            functionality.
            <br />
            My passion is centered around creating visually appealing and
            user-friendly web applications that consistently deliver exceptional
            user experiences. I also bring expertise in responsive design
            principles and ensuring cross-browser compatibility, allowing me to
            translate wireframes and mockups into pixel-perfect interfaces.
            <br />
            Moreover, I have a track record of effective collaboration with
            cross-functional teams, including designers and back-end developers,
            which results in seamless integration and the successful delivery of
            projects within tight deadlines.
          </span>
          <div className="about__icons">
            <Icon type="Angular" />
            <Icon type="ReactIcon" />
            <Icon type="Javascript" />
            <Icon type="Typescript" />
            <Icon type="Html" />
            <Icon type="Wordpress" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
