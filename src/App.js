import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import HeroSection from "./components/Hero";
import PortFolioSection from "./components/Portfolio";
import ServiceSection from "./components/Service";
import Footer from "./components/Footer";
import ToolsSection from "./components/Tools";
import ContactSection from "./components/Contact";
import ProjectSection from "./components/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <PortFolioSection />
      <ContactSection />
      <ToolsSection />
      <Footer />
    </div>
  );
}

export default App;
