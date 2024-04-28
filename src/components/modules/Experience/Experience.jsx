import React from "react";
import experiences from "../../../experiences.json";
import SingleExperience from "../../cores/SingleExperience/SingleExperience";
import "./Experience.scss";

const Experience = () => {
  let reverse = true;
  let index = 0;

  return (
    <div className="experience" id="career">
      {experiences.map((items) => (
        <div key={index++}>
          <h2 className="sec-title">{items.sec}</h2>
          <h1 className="main-title">{items.main}</h1>
          <div className="experiences">
            {items.list
              .sort((item1, item2) => {
                const d1 = new Date(item1.timeStart);
                const d2 = new Date(item2.timeStart);
                return d2 - d1;
              })
              .map((item) => {
                reverse = !reverse;
                return (
                  <SingleExperience
                    title={item.title}
                    technologies={item.technologies}
                    subtitle={item.subtitle}
                    text={item.text}
                    timeStart={item.timeStart}
                    timeEnd={item.timeEnd}
                    reverse={reverse}
                    key={item.id}
                    videos={item.videos}
                    photos={item.photos}
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
