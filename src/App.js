import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Child } from "./Child";

export default function App() {
  return (
    <Router>
      <div>
        <h2>Router with slug example</h2>

        <ul>
          <li>
            <Link to="/en/filter/netflix/test">Netflix</Link>
          </li>
          <li>
            <Link to="/en/filter/zillow-group/test">Zillow Group</Link>
          </li>
          <li>
            <Link to="/en/filter/yahoo/test">Yahoo</Link>
          </li>
          <li>
            <Link to="/en/filter/modus-create/test">Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/en/" children={<Child />} />
          <Route path="/en/filter/:id/:test" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}
