import React from "react";
import "./Skill.scss";
import ProgressBar from "../../cores/ProgressBar/ProgressBar";

const Skill = (props) => {
    let path = "../assets/img/skills/"+props.img;
  return (
    <div className="skill">

      <div className="desc">
        <span>
          <img src={path} alt="me" />
        </span>
        <p>{props.title}</p>
      </div>

      <div className="levelbar">
        <ProgressBar level={props.level} />
        <span>{props.level}%</span>
      </div>

    </div>
  );
};

export default Skill;
