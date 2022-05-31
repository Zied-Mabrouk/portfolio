import "./Experience.scss";
import React from "react";
import SingleExperience from "../../cores/SingleExperience/SingleExperience";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2 className="sec-title">what i did</h2>
      <h1 className="main-title">my experience</h1>
      <div className="experiences">
        <SingleExperience
          title={"Web Developer"}
          subtitle={"TCB"}
          text={ "I had the opportunity to create the official website of TCB from scratch which I implemented using HTML, CSS, JS ( including bootstrap and owl-carousel library) for the Front-end and PHP, MySQL for the Back-end. The website is dynamic and responsive. Working solo on this project made me discover new librairies as the one listed above and reinforce my knowledge about CSS. " }
          timeStart={"Dec 15, 2021"}
          timeEnd={"Mar 15, 2022"}
        />
        <SingleExperience
          title={"Web Developer"}
          subtitle={"TCB"}
          text={ "I had the opportunity to create the official website of TCB from scratch which I implemented using HTML, CSS, JS ( including bootstrap and owl-carousel library) for the Front-end and PHP, MySQL for the Back-end. The website is dynamic and responsive. Working solo on this project made me discover new librairies as the one listed above and reinforce my knowledge about CSS. " }
          timeStart={"Dec 15, 2021"}
          timeEnd={"Mar 15, 2022"}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Experience;
