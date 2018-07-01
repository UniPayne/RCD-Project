import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './stuff.css';


class Uebersicht extends Component {
  render() {
    return (
    <div>
      <div className="rahmen">
        <div className="links">
          <form>
            <label>Gast:</label>
            <input type='text' maxLength='20'></input><br/>
            <label>Heim:</label>
            <input type='text' maxLength='20'></input><br/>
            <label>LV:</label>
            <input type='text' maxLength='20'></input><br/>
            <label>Liga:</label>
            <input type='text' maxLength='20'></input><br/>
            <label>Verband:</label>
            <input type='text' maxLength='20'></input><br/>
          </form>
        </div>

        <div className="rechts">
          <form>
            <label>SpielerNr:</label>
            <input type='number' min='0'></input><br/>
            <label>Gespielt am:</label>
            <input type='Date'></input><br/>
            <label>in:</label>
            <input type='text' maxLength='20'></input><br/>
            <label className="zuschauer">Zuschauer:</label>
            <input type='number' min='0'></input><br/>
          </form>
          <NavLink to="/uebersicht"><button className="button">Informationen eintragen</button></NavLink>
        </div>

      </div>
    </div>
    );
  }
}
export default Uebersicht;
