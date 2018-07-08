import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import "../CSS/home.css";
import Voreinstellungen from "./Voreinstellungen";


class Home extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <NavLink to="/Voreinstellungen">
                <button className="position">Spiel starten!</button>
            </NavLink>
            <Route path="/Voreinstellungen" component={Voreinstellungen}/>
          </div>
        </HashRouter>
    );
  }
}

export default Home;
