import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Child from "./Child";

export default function App() {
  return (
    <Router>
      <div>
        <h2>Router with slug example</h2>

        <ul>
          <li>
            <Link to="/en/filter/netflix/xxxx">Netflix</Link>
          </li>
          <li>
            <Link to="/en/filter/zillow-group/ttttt">Zillow Group</Link>
          </li>
          <li>
            <Link to="/en/filter/yahoo/ddddd">Yahoo</Link>
          </li>
          <li>
            <Link to="/en/filter/modus-create/zzzzz">Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/en/" children={<Child />} />
          <Route exact path="/en/filter/:id/:test" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}
