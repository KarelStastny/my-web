import Aboutme from "./Front-end/components/Aboutme";
import Banner from "./Front-end/components/Banner";
import BestProjects from "./Front-end/components/BestProjects";
import Contakt from "./Front-end/components/Contakt";
import Experience from "./Front-end/components/Experience";
import Footer from "./Front-end/components/Footer";
import HeroSection from "./Front-end/components/HeroSection";
import MobileNavbar from "./Front-end/components/MobileNavbar";
import Navbar from "./Front-end/components/Navbar";
import Projects from "./Front-end/components/Projects";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="">
        {/* Header */}
        <header className=" overflow-hidden">
          <Navbar />
    
          <HeroSection />
        
        </header>
        <Banner/>
        <Aboutme/>
          <Experience/>
      <BestProjects/>
          <Projects/>
          <Contakt/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
