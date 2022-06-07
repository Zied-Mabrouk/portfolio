import React from "react";
import ButtonSVG from "../../cores/Button/ButtonSVG";
import "./HomePage.scss";

const HomePage = () => {
  
  return (
    <section id="home" >
      <div className="home-titles">
        <h2>Zied Mabrouk</h2>
        <h1>Web Developer</h1>
        <h2>Portfolio 2022</h2>
        <div className="home-buttons">
          <ButtonSVG content="Download CV" type="download" />
          <ButtonSVG content="Contact me" type="contact" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
