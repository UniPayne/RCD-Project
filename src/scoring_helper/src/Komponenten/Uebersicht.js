import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import './uebersicht.css';

import Tabelle from "./Tabelle";
import Spieler from "./Spieler";


class Uebersicht extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form_spielnummer: '',
      form_spieldatum: '',
      form_liga_name: '',
      form_verband_name: '',
      form_gastTeam_name: '',
      form_heimTeam_name: '',
      form_austragungsort: '',
      form_zuschauer: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}


  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
  }



  render() {
    return (
    <div>
      <div className="spielInformationen_links">
        <div className="links">
          <form>
            <label>SpielNr:</label>
            <input type='number' name="spielnummer" value={this.state.form_spielnummer} min={0} readOnly /><br/>
            <label>Verband:</label>
            <input type='text' name="verband_name" value={this.state.form_verband_name} maxLength={20} readOnly /><br/>
            <label>Gast:</label>
            <input type='text' name="gastTeam_name" maxLength={20} value={this.state.form_gastTeam_name} readOnly /><br/>

            <label className="in">Austragungsort:</label>
            <input className="inInput" type='text' name="austragungsort" value={this.state.form_austragungsort} maxLength={20} readOnly/><br/>

          </form>
        </div>

        <div className="rechts">
            <div className="gespieltAm">
              <label>Gespielt am:</label>
              <input type='Date' name="spielDatum" value={this.state.form_spieldatum} readOnly/>
            </div>
              <label>Liga:</label>
              <input type='text' name="liga_name" maxLength={20} value={this.state.form_liga_name} readOnly /><br/>

              <label>Heim:</label>
              <input type='text' name="heimTeam_name" maxLength={20} value={this.state.form_heimTeam_name} readOnly /><br/>
            <div className="zuschauer">
              <label>Zuschauer:</label>
              <input className="zuschauerInput" name="zuschauer" type='number'value={this.state.form_zuschauer} min={0} readOnly/>

{/* Popup startet hier*/}
              <Popup trigger={<button className="button">Informationen eintragen</button>}
                  modal
                  closeOnDocumentClick
                  >
                  <div className="SpielInfo_Popup">
                    <h1>Spielinformationen</h1>
                      <label>SpielNr:</label>
                      <form onSubmit={this.handleSubmit}>
                        <input type='text' name="form_spielnummer" maxLength={20} onChange={this.handleChange}/> <br/>
                        <label>Gespielt am:</label>
                        <input type="dateTime" name="form_spieldatum" onChange={this.handleChange}/><br/>
                        <label>Liga:</label>
                        <input type='text' name="form_liga_name" maxLength={20} onChange={this.handleChange}/> <br/>
                        <label>Verband:</label>
                        <input type='text'name="form_verband_name" maxLength={20} onChange={this.handleChange}/> <br/>
                        <label>Gast:</label>
                        <input type='text' name="form_gastTeam_name" maxLength={20} onChange={this.handleChange}/> <br/>
                        <label>Heim:</label>
                        <input type='text'name="form_heimTeam_name" maxLength={20} onChange={this.handleChange}/> <br/>
                        <label>Austragungsort:</label>
                        <input type="text" name="form_austragungsort" maxLength={20} onChange={this.handleChange}/> <br/>
                        <label>Zuschauer:</label>
                        <input type="number" name="form_zuschauer" min={0} onChange={this.handleChange}/> <br/>
                        <button name="form_abbruch">Abbruch</button>
                        <input type="submit" name="form_speichern"/>
                      </form>
                  </div>
                </Popup>
              </div>
              <div>
              </div>

        </div>
      </div>

      <div className="punkte_rechts">
          <Tabelle/>

      </div>

      <div className="spielerInformationen">
        <Spieler/>

      </div>
      <div className="spielfeld">
      </div>
    </div>
    );
  }
}

export default Uebersicht;
