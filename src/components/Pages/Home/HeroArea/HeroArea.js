import React from "react";
import "./HeroArea.scss";

const HeroArea = () => {
  return (
    <div className="heroArea-inner">
      <h1>
        <b>Hello_World...</b> I am Junaid Jwolt
      </h1>
      <h3>Full Stack Developer</h3>
      <ul>
        <li>Software Developer</li>
        <li>Programmer</li>
        <li>Technology Lover</li>
      </ul>
      <div className="heroArea-butttons">
        <a
          href="https://drive.google.com/file/d/1_pdcXgmxx2CKPlcGXH_le7UX0VqpyPuZ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button class="btn-1">
            <span>Get Resume</span>
          </button>
        </a>

        <a href="#contact">
          <button class="btn-1">
            <span>Contact Me</span>
          </button>
        </a>
      </div>
      <div className="next-section-icon"></div>
    </div>
  );
};

export default HeroArea;
