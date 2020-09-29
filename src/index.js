import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Main from "./components/Main";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <About />
    <Portfolio />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
