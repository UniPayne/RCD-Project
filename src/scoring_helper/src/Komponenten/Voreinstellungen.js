import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "../CSS/home.css";
import "../CSS/voreinstellungen.css";

import Uebersicht from "./Uebersicht";

class Voreinstellungen extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <div className="vor_oben">
            <div className="vor_spielInfo">
              div spielinfo
            </div>

            <div className="vor_logo">
              div logo
            </div>
          </div>

          <div className="vor_unten">
            <div className="vor_gast">
              div gast
            </div>

            <div className="vor_heim">
              div heim
            </div>
          </div>

            <div>
              <NavLink to="/Uebersicht"><button classname="vor_position">ftbfkzu</button></NavLink>
              <Route path="/Uebersicht" component={Uebersicht}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default Voreinstellungen;
