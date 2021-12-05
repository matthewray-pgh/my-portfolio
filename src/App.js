import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home.js";
import Containers from "./components/Containers";
import BusinessTracker from "./components/BusinessTracker.js";
import FortniteStuff from "./pages/FortniteStuff.js";
import FourHourBody from "./pages/4HB";

function App() {
  return (
    <Router>
      <div>
        <div className="app">
          <Switch>
            <Route path="/containers">
              <Containers />
            </Route>
            <Route path="/businessTracker">
              <BusinessTracker />
            </Route>
            <Route path="/fortniteRandom">
              <FortniteStuff />
            </Route>
            <Route path="/fourHourBody">
              <FourHourBody />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
