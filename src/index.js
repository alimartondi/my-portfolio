import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutScreen from "./components/AboutScreen";
import PortfolioScreen from "./components/PortfolioScreen";
import NotFoundScreen from "./components/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={AboutScreen} />
        <Route exact path="/portfolio" component={PortfolioScreen} />
        <Route exact path="/about" component={AboutScreen} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
