import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./home.css";
import Uebersicht from "./Uebersicht";

class Home extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <NavLink to="/Uebersicht"><button classname="position">Spiel starten!</button></NavLink>
            <Route path="/Uebersicht" component={Uebersicht}/>
          </div>
        </HashRouter>
    );
  }
}

export default Home;
