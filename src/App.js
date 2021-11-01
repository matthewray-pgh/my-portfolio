import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Containers from "./components/Containers";
import BusinessTracker from "./components/BusinessTracker.js";
import FortniteStuff from "./components/FortniteStuff.js";

function App() {
  return (
    <Router>
      <div>
        <Header />
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
