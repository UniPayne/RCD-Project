import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "../CSS/home.css";
import "../CSS/voreinstellungen.css";
import logo from '../logo.svg';


import Uebersicht from "./Uebersicht";

class Voreinstellungen extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <div className="vor_oben">
            <div className="vor_spielInfo">
              <label>Spielinformation</label>

              <button className="button1">Spiel info</button>
            </div>

            <div className="vor_logo">
              <img src={logo} className="logo" alt="logo" />
            </div>
          </div>

          <div className="vor_unten">
            <div className="vor_gast">
              <label>Gast</label>


              <button className="button2">Gast</button>
            </div>

            <div className="vor_heim">
                <label>Heim</label>

              <button className="button3">Heim</button>
            </div>
          </div>

            <div classname="vor_button">
              <NavLink to="/Uebersicht"><button >weiter</button></NavLink>
              <Route path="/Uebersicht" component={Uebersicht}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default Voreinstellungen;
