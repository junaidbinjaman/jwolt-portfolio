import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="inner-about-section">
      <div className="about-left">
        <img
          src="https://scontent.fdac38-1.fna.fbcdn.net/v/t1.6435-9/177941211_1126200011206841_157414275842701269_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BS9RpYW51l4AX-6-aDH&_nc_ht=scontent.fdac38-1.fna&oh=528416c7921b28f06364b040c02ca6ab&oe=60B2B728"
          alt=""
        />
      </div>
      <div className="about-right">
        <h1>Let's Know About Me</h1>
        <p>
          Hi, I am Junaid. a self taught, passionate web developer. I have
          expertise in HTML, CSS, and JavaScript React. Also, I have good
          knowledge of nodeJS for server-side development. I worked as a
          WordPress developer for more than 2 years, so I have little bit
          knowledge of PHP, and jquery as well. Also, I am an expert
          Woo-commerce developer, as I have completed more than 25 Woo-commerce
          projects and worked with two different companies as a Woo-commerce
          developer
        </p>
      </div>
    </div>
  );
};

export default About;
