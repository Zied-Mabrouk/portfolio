
import HomePage from "./components/modules/HomePage/HomePage";
import NavBar from "./components/modules/NavBar/NavBar";

import "./App.css";
import About from "./components/modules/About/About";
import Expertise from "./components/modules/Expertise/Expertise";
import Experience from "./components/modules/Experience/Experience";

function App() {


  return (
    <>
      <NavBar />
      <HomePage />
      <About/>
      <Expertise/>
      <Experience/>
    </>
  );
}

export default App;
