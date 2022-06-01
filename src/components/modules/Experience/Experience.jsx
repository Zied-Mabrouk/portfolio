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
          title={"The Call Of Justice"}
          subtitle={"Academic Project"}
          text={ "A 2D game including collision detection and the physics of movement coded from scratch with <b>C<b> and <b>SDL Library<b>." }
          timeStart={"Feb 22, 2021"}
          timeEnd={"Jun 01, 2021"}
        />
        <SingleExperience
          title={"Kingdoms"}
          subtitle={"Plugin Minecraft"}
          text={ "Since I've been playing Minecraft with friends and I heard that it was possible to code some plugins to spicy up things, I decided to start my own plugin. Kingdoms is a Minecraft Plugin simulating wars between realms taking place in the medieval era coded entirely in <b>Java<b> with a <b>MongoDB<b> database. " }
          timeStart={"Sep 01, 2020"}
          timeEnd={"Jul 15, 2021"}
          reverse={true}
        />
        <SingleExperience
          title={"Home Delivery"}
          subtitle={"Academic Project"}
          text={ "A software for a delivery company developed with C++ and QT library." }
          timeStart={"Sep 20, 2020"}
          timeEnd={"Feb 28, 2021"}
        />
        <SingleExperience
          title={"Emerald Website"}
          subtitle={"Academic Project"}
          text={ "A <b>FullStack<b> website that manages the operation of a restaurant remotely. it contains many useful features saving time for both the employees and the clients at the same time." }
          timeStart={"Feb 22, 2021"}
          timeEnd={"Jun 01, 2021"}
          reverse={true}
        />
        <SingleExperience
          title={"Hydra"}
          subtitle={"Academic Project"}
          text={ "A platform for hosting online tournaments including your favorite games, allowing bets and donations to support e-sports players and help them improve their hardware and make a living. The platform regroups a Website <b>(Symfony + PHP)<b>, a mobile application <b>(Codenameone + Java)<b> and a desktop software <b>(Java + Java FX)<b>." }
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
          text={ "I am one of the founding members of the Rotaract and I was in charge as the general secretary within the executive board. " }
          timeStart={"Nov 01, 2020"}
          timeEnd={"Jul 30, 2021"}
          reverse={true}
        />
        <SingleExperience
          title={"Head Of Internal Communications"}
          subtitle={"Rotaract NotreDame Connect"}
          text={ "I organized some events in order to make new members more comfortable with the charity work even though i have to admit that I didn't dedicate my time to it since the first year of IT engineering was really challenging." }
          timeStart={"Jul 30, 2021"}
          timeEnd={"Now"}
        />
        <SingleExperience
          title={"Member"}
          subtitle={"IEEE"}
          text={ "I participated in the TSYP which is a Tunisian students and young professionals congress held annualy where more than 500 engineering students from several Tunisian universities, as well as young professionals, gather to learn further details about the IEEE technical, professional, and educational benefits; and to discuss the future engineering challenges worldwide and in Tunisia. We ended up winning the Power & Energy Society challenge." }
          timeStart={"Sep 15, 2019"}
          timeEnd={"Jun 01, 2020"}
          reverse={true}
        />
        <SingleExperience
          title={"Member of the Computer Society Chapter"}
          subtitle={"IEEE"}
          text={ "I attented many congresses and workshops to improve my professional skills." }
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
          text={ "During the Racathon which is a Hackathon hosted by Rotaract La Marsa Carthage, we developed ideas about how to save water and started designing a mobile application for that purpose.This event lasted 24 hours so it was exhausting and fun at the same time." }
          timeStart={"Mar 19, 2022"}
          timeEnd={"Mar 20, 2022"}
          reverse={true}
        />
        <SingleExperience
          title={"Sponsoring & Negotiation Technics"}
          subtitle={"Rotaract NotreDame Connect"}
          text={ "In this occasion I learned how to negotiate with the people at the top of the hierarchy to settle a sponsorship or any deal and how to be prepared mentally and physically for the tough situation I may encounter." }
          timeStart={"Mar 19, 2022"}
          timeEnd={"Mar 20, 2022"}
        />
       
      </div>
      <h2 className="sec-title">what i like</h2>
      <h1 className="main-title">My Passions</h1>
      <div className="experiences">
       
        <SingleExperience
          title={"Programming"}
          subtitle={""}
          text={ "Since I was a kid, I've always been interested by how games were created. I always had a computer at my disposal at a young age, my first game was Warcraft III and I enjoyed my childhood playing it with that constant question in my mind ; How was it done ? That curiosity led me to start searching on google and watching random videos on youtube and dailymotion at the time to enlarge my knowledge and that's exactly when I started to inspect the websites code sources to understand how it functions. Now I'm really passionate about <b>Web Development<b> and <b>Problem Solving<b> in general" }
          timeStart={"Childhood"}
          timeEnd={"Now"}
          reverse={true}
        />
        <SingleExperience
          title={"Swimming"}
          subtitle={"Rotaract NotreDame Connect"}
          text={ "I practiced swimming for 3 years and I liked it so much but sadly I had to stop at a certain age because I was lacking free time." }
          timeStart={"2007"}
          timeEnd={"2010"}
        />
       
      </div>
    </div>
  );
};

export default Experience;
