import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="inner-skills">
      <h1>My Skills</h1>
      <div className="skill-row">
        <div className="skills-left">
          <div className="skill-box">
            <h3>JavaScript</h3>
            <div class="bar javascript" data-text="85%"></div>
          </div>
          <div className="skill-box">
            <h3>React</h3>
            <div class="bar react" data-text="90%"></div>
          </div>
          <div className="skill-box">
            <h3>Node JS</h3>
            <div class="bar nodejs" data-text="70%"></div>
          </div>
          <div className="skill-box">
            <h3>MongoDB</h3>
            <div class="bar mongodb" data-text="80%"></div>
          </div>
        </div>
        <div className="skills-right">
          <div className="skill-box">
            <h3>PHP</h3>
            <div class="bar php" data-text="43%"></div>
          </div>
          <div className="skill-box">
            <h3>WordPress</h3>
            <div class="bar wordpress" data-text="95%"></div>
          </div>
          <div className="skill-box">
            <h3>WooCommerce</h3>
            <div class="bar woocommerce" data-text="75%"></div>
          </div>
          <div className="skill-box">
            <h3>MySQL</h3>
            <div class="bar mysql" data-text="45%"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
