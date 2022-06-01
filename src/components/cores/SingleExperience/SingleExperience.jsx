import React from "react";
import "./SingleExperience.scss";
import { TiTick } from "react-icons/ti";
import SimpleSlider from "../SimpleSlider/SimpleSlider";

const SingleExperience = (props) => {
  let reversed = props.reverse;
  let text = props.text;
  return (
    <div
      className="singleExperience"
      style={{ flexDirection: reversed ? "row-reverse" : "row" }}
    >
      <div className={reversed ? "desc reversed-desc" : "desc"}>
        <h1 style={{ textAlign: reversed ? "left" : "right" }}>
          {props.title}
        </h1>

        <h2 style={{ textAlign: reversed ? "left" : "right" }}>
          {props.subtitle}
        </h2>
        <p style={{ textAlign: reversed ? "left" : "right" }}>
          {text.split("<b>").map((item, key) => {
            if (key && key % 2 === 1) {
              return <b key={key}>{item}</b>;
            }
            return item;
          })}
        </p>
      </div>
      <div className="line">
        <div className="outer">
          <div className="inner">
            <TiTick />
          </div>
        </div>
      </div>
      <div
        className="date"
        style={reversed ? { paddingRight: "48px" } : { paddingLeft: "48px" }}
      >
        <div className="bubble">
          <div className={reversed ? "arrow reversed-arrow" : "arrow"}></div>
          <h2>
            {props.timeStart} - <span>{props.timeEnd}</span>
          </h2>
          <div className="body"></div>
        </div>
        {props.videos && (
          <div className="video">
            <SimpleSlider
            videos={props.videos}
            folder={props.folder}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleExperience;