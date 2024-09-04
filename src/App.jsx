import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Education />
      <Skills />
      <Project />
      <About />
      <Footer/>
    </>
  );
}

export default App;
