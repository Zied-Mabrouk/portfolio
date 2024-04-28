import React from "react";
import { TiTick } from "react-icons/ti";
import SimpleSlider from "../SimpleSlider/SimpleSlider";
import "./SingleExperience.scss";

const SingleExperience = ({
  reverse: reversed,
  text,
  technologies,
  photos,
  timeStart,
  timeEnd,
  subtitle,
  title,
  videos,
}) => {
  return (
    <div
      className="singleExperience"
      style={{ flexDirection: reversed ? "row-reverse" : "row" }}
    >
      <div className={reversed ? "desc reversed-desc" : "desc"}>
        <h1 style={{ textAlign: reversed ? "left" : "right" }}>{title}</h1>

        <h2 style={{ textAlign: reversed ? "left" : "right" }}>{subtitle}</h2>
        <p style={{ textAlign: reversed ? "left" : "right" }}>
          {text.split("<b>").map((item, key) => {
            if (key && key % 2 === 1) {
              return <b key={key}>{item}</b>;
            }
            return item;
          })}
        </p>
        {technologies && (
          <span className="technologies">
            <b>Technologies: </b>
            {technologies.join(", ")}
          </span>
        )}
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
        style={
          reversed
            ? { paddingRight: "48px", alignItems: "flex-end" }
            : { paddingLeft: "48px", alignItems: "flex-start" }
        }
      >
        <div className="bubble">
          <div className={reversed ? "arrow reversed-arrow" : "arrow"}></div>
          <h2>
            <span>{timeStart}</span> <span>-</span> <span>{timeEnd}</span>
          </h2>
          <div className="body"></div>
        </div>
        {(videos || photos) && (
          <div className="video">
            <SimpleSlider videos={videos} photos={photos} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleExperience;
