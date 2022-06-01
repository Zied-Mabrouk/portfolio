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
      {experiences.map((items) => (
      <div className="experiences" key={items.type}>
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
      ))}
    </div>
  );
};

export default Experience;
