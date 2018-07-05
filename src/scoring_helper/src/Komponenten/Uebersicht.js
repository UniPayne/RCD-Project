import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import './uebersicht.css';



class Uebersicht extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }



  render() {
    return (
    <div>
      <div className="spielInformationen_links">
        <div className="links">
          <form>
            <label>SpielNr:</label>
            <input type='number' name="spielnummer" min={0} readOnly /><br/>
            <label>Verband:</label>
            <input type='text' name="verband_name" maxLength={20} readOnly /><br/>
            <label>Gast:</label>
            <input type='text' name="gastTeam_name" maxLength={20} readOnly /><br/>

            <label className="in">Austragungsort:</label>
            <input className="inInput" type='text' name="austragungsort" maxLength={20} readOnly/><br/>

          </form>
        </div>

        <div className="rechts">
            <div className="gespieltAm">
              <label>Gespielt am:</label>
              <input type='Date' name="spielDatum" readOnly/>
            </div>
              <label>Liga:</label>
              <input type='text' name="liga_name" maxLength={20} readOnly /><br/>

              <label>Heim:</label>
              <input type='text' name="heimTeam_name" maxLength={20} readOnly /><br/>
            <div className="zuschauer">
              <label>Zuschauer:</label>
              <input className="zuschauerInput" name="zuschauer" type='number' min={0} readOnly/>

{/* Popup startet hier*/}
              <Popup trigger={<button className="button">Informationen eintragen</button>}
                  modal
                  closeOnDocumentClick
                  >
                  <div className="SpielInfo_Popup">
                    <h1>Spielinformationen</h1>
                      <label>SpielNr:</label>
                      <form onSubmit={this.handleSubmit}>
                        <input type='text' name="form_spielnummer" maxLength={20}/> <br/>
                        <label>Gespielt am:</label>
                        <input type="dateTime" name="form_spieldatum"/><br/>
                        <label>Liga:</label>
                        <input type='text' name="form_liga_name" maxLength={20}/> <br/>
                        <label>Verband:</label>
                        <input type='text'name="form_verband_name" maxLength={20}/> <br/>
                        <label>Gast:</label>
                        <input type='text' name="form_gastTeam_name" maxLength={20}/> <br/>
                        <label>Heim:</label>
                        <input type='text'name="form_heimTeam_name" maxLength={20}/> <br/>
                        <label>Austragungsort:</label>
                        <input type="text" name="form_austragungsort" maxLength={20}/> <br/>
                        <label>Zuschauer:</label>
                        <input type="number" name="form_zuschauer" min={0}/> <br/>
                        <button name="form_abbruch">Abbruch</button>
                        <button name="form_speichern">Speichern</button>
                      </form>
                  </div>
                </Popup>
              </div>
              <div>
              </div>

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
