import React, { Component } from "react";
import {Route, Link, HashRouter} from "react-router-dom";
import Voreinstellungen from "./Voreinstellungen";
//import baseball_feld from '../baseball_feld.png';


import "../CSS/home.css";


class Home extends Component {
  render() {
    return (
          <div>

          <label className="titel">Scoring Helper</label>
            <div className="button_center">
            <Link to="/Voreinstellungen">
                <button className="start">Spiel starten</button>
            </Link>
          </div>
        </div>
    );
  }
}

export default Home;
