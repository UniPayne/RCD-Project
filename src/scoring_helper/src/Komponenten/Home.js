import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Uebersicht from "./Uebersicht";

class Home extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <NavLink to="/uebersicht"><button>Spiel starten!</button></NavLink>
            <Route path="/uebersicht" component={Uebersicht}/>
          </div>
        </HashRouter>
    );
  }
}

export default Home;
