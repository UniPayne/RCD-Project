import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import "../CSS/home.css";
import Voreinstellungen from "./Voreinstellungen";
import baseball_feld from '../baseball_feld.png';


class Home extends Component {
  render() {
    return (
        <HashRouter>
          <div>


          <div className="button_center">
            <NavLink to="/Voreinstellungen">
                <button className="start">Spiel starten</button>
            </NavLink>
            <Route path="/Voreinstellungen"/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Home;
