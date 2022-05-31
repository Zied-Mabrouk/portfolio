import React, { useState } from "react";
import "./NavBar.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import {  BiMessageSquareDetail } from "react-icons/bi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";


const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="NavBar">
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        onClick={() => setActiveNav("#home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#expertise"
        className={activeNav === "#expertise" ? "active" : ""}
        onClick={() => setActiveNav("#expertise")}
      >
        <GiGiftOfKnowledge />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <MdOutlineWork />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </header>
  );
};

export default NavBar;
