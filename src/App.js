import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import PortFolioSection from "./components/Portfolio";
import AboutSection from "./components/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-main">
        <Main />
        <AboutSection />
        <PortFolioSection />
      </main>
    </div>
  );
}

export default App;
