import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import PortFolioSection from "./components/Portfolio";
import ServiceSection from "./components/Service";
import FooterSection from "./components/Footer";
import ToolsSection from "./components/ToolsSection";
import ContactSection from "./components/Contact";
import ProjectSection from "./components/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <ServiceSection />
      <ProjectSection />
      <PortFolioSection />
      <ContactSection />
      <ToolsSection />
      <FooterSection />
    </div>
  );
}

export default App;
