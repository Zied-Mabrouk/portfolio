import "./About.scss";
import React from "react";
import Triangle from "../../cores/Triangle/Triangle";

const About = () => {
  
  return (
    <div className="about" id="about" >
      <Triangle />
      <div className="about-me">
        <div className="about-me-text">
          <h1>
            <b>A</b>bout me
          </h1>
          <h2>I'm passionate about programming in general and I found my interest in the blockchain.</h2>
        </div>
        <div className="about-me-container">
          <img src="../assets/img/me.jpg" alt="me" />
          <div className="about-light"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
