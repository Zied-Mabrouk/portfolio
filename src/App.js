import HomePage from "./components/modules/HomePage/HomePage";
import NavBar from "./components/modules/NavBar/NavBar";

import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/modules/About/About";
import Contact from "./components/modules/Contact/Contact";
import Experience from "./components/modules/Experience/Experience";
import Expertise from "./components/modules/Expertise/Expertise";

function App() {
  let [active, setActive] = useState("#home");
  let myRef = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  var offsets = [];
  useEffect(() => {
    let child = null;
    for (child of myRef?.current.children) {
      if (child.id !== "") offsets.push([child.offsetTop, "#" + child.id]);
    }
  }, [offsets]);
  const handleScroll = () => {
    offsets.forEach((element) => {
      if (window.scrollY + window.innerHeight * 0.5 >= element[0]) {
        setActive(element[1]);
        return;
      }
    });
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div ref={myRef}>
      <NavBar active={active} setActive={setActive} />
      <HomePage />
      <About />
      <Expertise />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
