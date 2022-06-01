import "./Experience.scss";
import React from "react";
import SingleExperience from "../../cores/SingleExperience/SingleExperience";
import experiences from "../../../experiences.json";

const Experience = () => {
  let reverse = true;
  return (
    <div className="experience" id="career">
      <h2 className="sec-title">what i studied</h2>
      <h1 className="main-title">my education</h1>
      <div className="experiences">
        {experiences
          .filter((item) => item.type === "studies")
          .map((item) => {
            reverse = !reverse;
            return (
              <SingleExperience
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
                timeStart={item.timeStart}
                timeEnd={item.timeEnd}
                reverse={reverse}
                key={item.id}
              />
            );
          })}
      </div>
      <h2 className="sec-title">what i did</h2>
      <h1 className="main-title">my experience</h1>
      <div className="experiences">
        <SingleExperience
          title={"Web Developer"}
          subtitle={"TCB"}
          text={
            "I had the opportunity to create the official website of TCB from scratch which I implemented using <b>HTML, CSS, JS ( including bootstrap and owl-carousel library)<b> for the Front-end and <b>PHP and MySQL<b> for the Back-end. The website is dynamic and <b>responsive<b>. Working solo on this project made me discover new libraries as the one listed above and reinforce my knowledge about CSS. "
          }
          timeStart={"Dec 15, 2021"}
          timeEnd={"Mar 15, 2022"}
          reverse={true}
        />
      </div>
      <h2 className="sec-title">what i coded</h2>
      <h1 className="main-title">my projects</h1>
      <div className="experiences">
        <SingleExperience
          title={"The Call Of Justice"}
          subtitle={"Academic Project"}
          text={
            "A 2D game including collision detection and the physics of movement coded from scratch with <b>C<b> and <b>SDL Library<b>."
          }
          timeStart={"Feb 22, 2021"}
          timeEnd={"Jun 01, 2021"}
          videos={3}
          folder={"theCallOfJustice"}
        />
        <SingleExperience
          title={"Kingdoms"}
          subtitle={"Plugin Minecraft"}
          text={" "}
          timeStart={"Sep 01, 2020"}
          timeEnd={"Jul 15, 2021"}
          reverse={true}
        />
        <SingleExperience
          title={"Home Delivery"}
          subtitle={"Academic Project"}
          text={""}
          timeStart={"Sep 20, 2020"}
          timeEnd={"Feb 28, 2021"}
        />
        <SingleExperience
          title={"Emerald Website"}
          subtitle={"Academic Project"}
          text={""}
          timeStart={"Feb 22, 2021"}
          timeEnd={"Jun 01, 2021"}
          reverse={true}
        />
        <SingleExperience
          title={"Hydra"}
          subtitle={"Academic Project"}
          text={""}
          timeStart={"Jan 28, 2022"}
          timeEnd={"May 01, 2022"}
        />
      </div>
      <h2 className="sec-title">what i contributed to</h2>
      <h1 className="main-title">My Volunteering Experience</h1>
      <div className="experiences">
        <SingleExperience
          title={"General Secretary"}
          subtitle={"Rotaract NotreDame Connect"}
          text={" "}
          timeStart={"Nov 01, 2020"}
          timeEnd={"Jul 30, 2021"}
          reverse={true}
        />
        <SingleExperience
          title={"Head Of Internal Communications"}
          subtitle={"Rotaract NotreDame Connect"}
          text={""}
          timeStart={"Jul 30, 2021"}
          timeEnd={"Now"}
        />
        <SingleExperience
          title={"Member"}
          subtitle={"IEEE"}
          text={""}
          timeStart={"Sep 15, 2019"}
          timeEnd={"Jun 01, 2020"}
          reverse={true}
        />
        <SingleExperience
          title={"Member of the Computer Society Chapter"}
          subtitle={"IEEE"}
          text={""}
          timeStart={"Dec 12, 2021"}
          timeEnd={"Now"}
        />
      </div>
      <h2 className="sec-title">what i learned</h2>
      <h1 className="main-title">My Certificates</h1>
      <div className="experiences">
        <SingleExperience
          title={"Project Management & Pitching"}
          subtitle={"Rotaract La Marsa Carthage"}
          text={""}
          timeStart={"Mar 19, 2022"}
          timeEnd={"Mar 20, 2022"}
          reverse={true}
        />
        <SingleExperience
          title={"Sponsoring & Negotiation Technics"}
          subtitle={"Rotaract NotreDame Connect"}
          text={""}
          timeStart={"*"}
          timeEnd={"*"}
        />
      </div>
      <h2 className="sec-title">what i like</h2>
      <h1 className="main-title">My Passions</h1>
      <div className="experiences">
        <SingleExperience
          title={"Programming"}
          subtitle={""}
          text={""}
          timeStart={"Childhood"}
          timeEnd={"Now"}
          reverse={true}
        />
        <SingleExperience
          title={"Swimming"}
          subtitle={"Rotaract NotreDame Connect"}
          text={""}
          timeStart={"2007"}
          timeEnd={"2010"}
        />
      </div>
    </div>
  );
};

export default Experience;
