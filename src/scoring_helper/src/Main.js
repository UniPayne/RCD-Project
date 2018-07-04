import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Komponenten/Home";
import Stuff from "./Komponenten/Stuff";
import Contact from "./Komponenten/Contact";
import Uebersicht from "./Komponenten/Uebersicht";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Scoring Helper</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/uebersicht">Uebersicht</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/uebersicht" component={Uebersicht}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
