import "./Experience.scss";
import React from "react";
import SingleExperience from "../../cores/SingleExperience/SingleExperience";

const Experience = () => {
  return (
    <div className="experience" id="career">
      <h2 className="sec-title">what i studied</h2>
      <h1 className="main-title">my education</h1>
      <div className="experiences">
        <SingleExperience
          title={"High school student"}
          subtitle={"Khaiereddine Becha"}
          text={"Honestly I wasn't a big fun of my high school but it was a necessary step in my life to learn the basic things and to have insight about science and physics . I got my bachelor degree in <b>Science & physics<b>."}
          timeStart={"Sep 15, 2015"}
          timeEnd={"Jun 01, 2019"}
          reverse={true}
        />
        <SingleExperience
          title={"Student"}
          subtitle={"Esprit"}
          text={"This the most exciting step in my life because I started to learn more about programming when it's been my passion since I was a kid. Esprit is a great school that provides me with a lot of opportunities to learn and to grow. I'm currently studying IT engineering in <b>web development<b>."}
          timeStart={"Sep 01, 2019"}
          timeEnd={"Now"}
        />
      </div>
      <h2 className="sec-title">what i did</h2>
      <h1 className="main-title">my experience</h1>
      <div className="experiences">
       
        <SingleExperience
          title={"Web Developer"}
          subtitle={"TCB"}
          text={ "I had the opportunity to create the official website of TCB from scratch which I implemented using <b>HTML, CSS, JS ( including bootstrap and owl-carousel library)<b> for the Front-end and <b>PHP and MySQL<b> for the Back-end. The website is dynamic and <b>responsive<b>. Working solo on this project made me discover new libraries as the one listed above and reinforce my knowledge about CSS. " }
          timeStart={"Dec 15, 2021"}
          timeEnd={"Mar 15, 2022"}
          reverse={true}
        />
      </div>
      <h2 className="sec-title">what i coded</h2>
      <h1 className="main-title">my projects</h1>
      <div className="experiences">
       
        <SingleExperience
          title={"Kingdoms"}
          subtitle={"Plugin Minecraft"}
          text={ "Since I've been playing Minecraft with friends and I heard that it was possible to code some plugins to spicy up things, I decided to start my own plugin. Kingdoms is a Minecraft Plugin simulating wars between realms taking place in the medieval era coded entirely in <b>Java<b> with a <b>MongoDB<b> database. " }
          timeStart={"Sep 01, 2020"}
          timeEnd={"Jul 15, 2021"}
        />
        <SingleExperience
          title={"Emerald Website"}
          subtitle={"Academic Project"}
          text={ "A FullStack website that manages the operation of a restaurant remotely. it contains many useful features saving time for both the employees and the clients at the same time." }
          timeStart={"Feb 22, 2021"}
          timeEnd={"Jun 01, 2021"}
          reverse={true}
        />
        <SingleExperience
          title={"Hydra"}
          subtitle={"Academic Project"}
          text={ "A platform for hosting online tournaments including your favorite games, allowing bets and donations to support e-sports players and help them improve their hardware and make a living. The platform regroups a Website <b>(Symfony + PHP)<b>, a mobile application <b>(Codenameone + Java)<b> and a desktop software <b>(Java + Java FX)<b>" }
          timeStart={"Feb 22, 2021"}
          timeEnd={"Jun 01, 2021"}
        />
      </div>
    </div>
  );
};

export default Experience;
