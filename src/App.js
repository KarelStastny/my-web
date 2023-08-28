import React from "react";
import Aboutme from "./Front-end/components/Aboutme";
import Banner from "./Front-end/components/Banner";
import BestProjects from "./Front-end/components/BestProjects";
import Contact from "./Front-end/components/Contact";
import Experience from "./Front-end/components/Experience";
import Footer from "./Front-end/components/Footer";
import HeroSection from "./Front-end/components/HeroSection";
import Navbar from "./Front-end/components/Navbar";
import Projects from "./Front-end/components/Projects";
import "./index.css";

function App() {
  const sections = [
    { id: "home", label: "Home" },
    { id: "aboutMe", label: "O mě" },
    { id: "experience", label: "Zkušenosti" },
    { id: "projects", label: "Projekty" },
    { id: "contact", label: "Kontakt" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="overflow-hidden">
        <header className="overflow-hidden">
          <Navbar scrollToSection={scrollToSection} sections={sections} />
          <div id="home">
            <HeroSection
              scrollToSection={scrollToSection}
              sections={sections}
            />
          </div>
        </header>
        <Banner />
        <div id="aboutMe">
          <Aboutme />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <BestProjects />
        </div>
        <Projects />
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
