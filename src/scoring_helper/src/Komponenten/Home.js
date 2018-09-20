import React, { Component } from "react";
import {Route, Link, HashRouter} from "react-router-dom";
import "../CSS/home.css";
import Voreinstellungen from "./Voreinstellungen";
import baseball_feld from '../baseball_feld.png';


class Home extends Component {
  render() {
    return (
          <div>


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
