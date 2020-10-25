import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutDetailScreen from "./components/AboutDetail";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={AboutDetailScreen} />
        <Route>
          <h1 className="text-center">404 Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
