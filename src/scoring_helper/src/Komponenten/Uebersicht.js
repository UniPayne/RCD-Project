import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Link } from 'react-router-dom'
import './stuff.css';



class Uebersicht extends Component {
  render() {
    return (
    <div>
      <div className="spielInformationen_links">
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
              <div>
                <div className="gespieltAm">
                  <label>Gespielt am:</label>
                  <input  type='Date'></input>
                </div>
                <div className="rechtsIn">
                  <label className="in">in:</label>
                  <input className="inInput" type='text' maxLength='20'></input>
                </div>
              </div>
              <div className="zuschauer">
                <label>Zuschauer:</label>
                <input className="zuschauerInput" type='number' min='0'></input>
                <Link to="/uebersicht"><button className="button">Informationen eintragen</button></Link>
              </div>
          </form>
        </div>
      </div>

      <div className="punkte_rechts">
        kjkjk
      </div>

      <div className="spielerInformationen">
        <form className="spielerInf">
          <label className="nr">Nr.</label>
        <label>Name</label>
        <label>Vorname</label>
        <label>PassNr.</label>
      </form>
      </div>
      <div className="spielfeld">

      </div>
    </div>
    );
  }
}

export default Uebersicht;
