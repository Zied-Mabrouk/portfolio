import React from 'react'
import Skill from '../../cores/Skill/Skill';
import "./Expertise.scss";

const Expertise = () => {
  return (
    <div className='expertise' id="expertise">
        <h2 className='sec-title'>my skills</h2>
        <h1 className='main-title'>My Expertise</h1>
        <div className='expertise-skills'>
            <Skill level={70} title={"Javascript"} img="Javascript.svg"/>
            <Skill level={100} title={"Java"} img="Java.svg"/>
            <Skill level={90} title={"HTML"} img="Html.svg"/>
            <Skill level={90} title={"CSS"} img="Css.svg"/>
            <Skill level={70} title={"PHP"} img="PHP.svg"/>
            <Skill level={50} title={"Symfony"} img="Symfony.svg"/>
            <Skill level={30} title={"React"} img="React.svg"/>
            <Skill level={70} title={"SQL"} img="MySQL.svg"/>
            <Skill level={50} title={"Python"} img="Python.svg"/>
            <Skill level={60} title={"C++"} img="C++.svg"/>
            
        </div>
    </div>
  )
}

export default Expertise