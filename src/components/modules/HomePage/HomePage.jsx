import React from "react";
import ButtonSVG from "../../cores/Button/ButtonSVG";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section id="home">
      <div className="home-titles">
        <h2>Zied Mabrouk</h2>
        <h1>Web Developer</h1>
        <h2>Portfolio 2022</h2>
        <div className="home-buttons">
          <ButtonSVG content="Download CV" type="download" />
          <ButtonSVG content="Contact me" type="contact" />
        </div>
      </div>
      <div className="home-me">
        <div className="home-me-container">
          <img src="../assets/img/me1.png" alt="hey" />
          <div className="home-light"></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
