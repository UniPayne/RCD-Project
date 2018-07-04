import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import Spielinformation from "../Backend/Spielinformation.js"
import './uebersicht.css';



class Uebersicht extends Component {
  render() {
    return (
    <div>
      <div className="spielInformationen_links">
        <div className="links">
          <form>
            <label>Gast:</label>
            <input type="text" maxLength={20} /><br />
            <label>Heim:</label>
            <input type="text" maxLength={20} /><br />
            <label>Liga:</label>
            <input type="text" maxLength={20} /><br />
            <label>Verband:</label>
            <input type="text" maxLength={20} /><br />
          </form>
        </div>

        <div classname="rechts">
  <form>
    <label>SpielNr:</label>
    <input type="number" min={0} /><br />
    <div>
      <div classname="gespieltAm">
        <label>Gespielt am:</label>
        <input type="Date" />
      </div>
      <div classname="rechtsIn">
        <label classname="in">in:</label>
        <input classname="inInput" type="text" maxLength={20} />
      </div>
    </div>
    <div classname="zuschauer">
      <label>Zuschauer:</label>
      <input classname="zuschauerInput" type="number" min={0} />


{/* Popup startet hier*/}

        <Popup trigger={<button >Informationen eintragen</button>}
            modal
            closeOnDocumentClick
            >
            <div className="SpielInfo_Popup">
              <h1>Spielinformationen</h1>
              <form>
                <label>SpielNr:</label>
                <input type='text' maxLength={20}/><br/>
                <label>Gast:</label>
                <input type='text' maxLength={20}/><br/>
                <label>Heim:</label>
                <input type='text' maxLength={20}/><br/>
                <label>Liga:</label>
                <input type='text' maxLength={20}/><br/>
                <label>Verband:</label>
                <input type='text' maxLength={20}/><br/>
                <input type="submit" defaultValue ="Eingaben speichern"/>
                </form>
            </div>
          </Popup>
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
