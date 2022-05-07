import React, { useState } from "react";
import "./NavBar.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="NavBar">
      <a href="#home" className={activeNav === "#home" ? "active" : ""}
      onClick={ ()=>setActiveNav("#home") }
      >
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""}
      onClick={ ()=>setActiveNav("#about") }
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={ ()=>setActiveNav("#experience") }
      >
        <BiBook />
      </a>
      <a href="#services" className={activeNav === "#services" ? "active" : ""}
      onClick={ ()=>setActiveNav("#services") }
      >
        <RiServiceLine />
      </a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""}
      onClick={ ()=>setActiveNav("#contact") }
      >
        <BiMessageSquareDetail />
      </a>
    </header>
  );
};

export default NavBar;
