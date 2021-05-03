import React from "react";
import Header from "../../Shared/Header/Header";
import About from "./About/About";
import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import HeroArea from "./HeroArea/HeroArea";
import "./Home.scss";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
const Home = () => {
  return (
    <div>
      {" "}
      {/* header */}{" "}
      <header id="header">
        <Header />
      </header>{" "}
      {/* hero area */}{" "}
      <section id="home" className="heroArea-container">
        <HeroArea />
      </section>{" "}
      {/* about section */}{" "}
      <section id="about" className="about-section">
        <About />
      </section>{" "}
      {/* skill section */}{" "}
      <section id="skills" className="skill-container">
        <Skills />
      </section>{" "}
      {/* portfolio section */}{" "}
      <section id="portfolio" className="portfolio-container">
        <Portfolio />
      </section>{" "}
      {/* blogs section*/}{" "}
      <section id="blog" className="blog-container">
        <Blogs />
      </section>{" "}
      {/* contact section */}{" "}
      <section id="contact" className="contact-container">
        <Contact />
      </section>{" "}
      {/* footer */}{" "}
      <section className="footer-container">
        <Footer />
      </section>{" "}
      {/* copiright section */}
      <section className="copiright-section">
        <div className="copy-right-text">
          <p>
            copyright © {new Date().getFullYear()}. Developed by jwolt. All
            Right Reserved
          </p>
          <a href="#header">
            <i class="fas fa-chevron-up"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
