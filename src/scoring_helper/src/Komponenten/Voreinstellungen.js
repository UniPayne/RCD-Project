import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "../CSS/home.css";
import "../CSS/voreinstellungen.css";
import logo from '../logo.png';
import Vor_Spieler_Heim from "./Vor_Spieler_Heim";
import Vor_Spieler_Gast from "./Vor_Spieler_Gast";




import Uebersicht from "./Uebersicht";

class Voreinstellungen extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <div className="vor_oben">
            <div className="vor_spielInfo">
              <label>Spielinformation</label>


              <button className="button_spielinfo">Spiel info</button>
            </div>

            <div>

              <img src={logo} className="logo" alt="logo" />
            </div>
          </div>

          <div className="vor_unten">
            <div className="vor_gast">
              <label>Gast</label>
              <Vor_Spieler_Gast/>

              <button className="button_gast">Gast</button>
            </div>

            <div className="vor_heim">
                <label>Heim</label>
                <Vor_Spieler_Heim/>


              <button className="button_heim">Heim</button>
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
