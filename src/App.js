import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import PortFolioSection from "./components/Portfolio";
import AboutSection from "./components/About";
import ServiceSection from "./components/Service";
import FooterSection from "./components/Footer";
import ToolsSection from "./components/ToolsSection";
import ContactSection from "./components/Contact";
import PortfolioSlider from "./components/Slick";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <PortFolioSection />
      <ServiceSection />
      <ContactSection />
      <ToolsSection />
      <PortfolioSlider />
      <FooterSection />
    </div>
  );
}

export default App;
