import React from "react";
import "./NavBar.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";

const NavBar = ({ active, setActive }) => {
  let hrefs = [
    ["#home", <AiOutlineHome />],
    ["#about", <AiOutlineUser />],
    ["#expertise", <GiGiftOfKnowledge />],
    ["#career", <MdOutlineWork />],
    ["#contact", <BiMessageSquareDetail />],
  ];
  return (
    <header className="NavBar">
      {hrefs.map((href, index) => (
        <a
          href={href[0]}
          className={active === href[0] ? "active" : ""}
          onClick={() => setActive(href[0])}
          key={index}
        >
          {href[1]}
        </a>
      ))}
    </header>
  );
};

export default NavBar;
