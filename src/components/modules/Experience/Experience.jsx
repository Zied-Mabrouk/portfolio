import "./Experience.scss";
import React from "react";
import SingleExperience from "../../cores/SingleExperience/SingleExperience";
import experiences from "../../../experiences.json";

const Experience = () => {
  let reverse = true;
  let index=0;
  return (
    <div className="experience" id="career">
      
      {experiences.map((items) => (
        <div key={index++}>
        <h2  className="sec-title">{items.sec}</h2>
        <h1  className="main-title">{items.main}</h1>
          <div className="experiences" >
            {items.list.map((item) => {
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
        </div>
      ))}
    </div>
  );
};

export default Experience;
