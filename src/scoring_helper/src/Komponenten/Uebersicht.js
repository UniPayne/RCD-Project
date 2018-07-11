import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import ReactModal from 'react-modal';
import { Button } from 'semantic-ui-react';

//Komponenten
import Tabelle from         "./Tabelle";
import Spieler from         "./Spieler";
import SpielTabelle from    "./SpielTabelle";

//CSS
import '../CSS/uebersicht.css';
import '../CSS/spielInfo_Popup.css';


class Uebersicht extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spielnummer:      this.props.vor_spielnummer,
      spieldatum:       this.props.vor_spieldatum,
      liga_name:        this.props.vor_liga_name,
      verband_name:     this.props.vor_verband_name,
      gastTeam_name:    this.props.vor_gastTeam_name,
      heimTeam_name:    this.props.vor_heimTeam_name,
      austragungsort:   this.props.vor_austragungsort,
      zuschauer:        this.props.vor_zuschauer
    };

}


  render() {
    return (
    <div>
      <div className="spielInformationen_links">
        <div className="links">
          <form>
            <label>SpielNr:</label>
            <input type='number'
                   name="spielnummer"
                   value={this.state.spielnummer}
                   min={0}
                   readOnly />
                 <br/>

            <label>Verband:</label>
            <input type='text'
                   name="verband_name"
                   value={this.state.verband_name}
                   maxLength={20}
                   readOnly />
                 <br/>

            <label>Gast:</label>
            <input type='text'
                   name="gastTeam_name"
                   maxLength={20}
                   value={this.state.gastTeam_name}
                   readOnly />
                 <br/>

            <label className="in">Austragungsort:</label>
            <input className="inInput"
                   type='text'
                   name="austragungsort"
                   value={this.state.austragungsort}
                   maxLength={20}
                   readOnly/>
                 <br/>
          </form>
        </div>

        <div className="rechts">
            <div className="gespieltAm">
              <label>Gespielt am:</label>
              <input type='Date'
                     name="spielDatum"
                     value={this.state.spieldatum}
                     readOnly/>
            </div>

            <label>Liga:</label>
            <input type='text'
                   name="liga_name"
                   maxLength={20}
                   value={this.state.liga_name}
                   readOnly />
                 <br/>

              <label>Heim:</label>
              <input type='text'
                     name="heimTeam_name"
                     maxLength={20}
                     value={this.state.heimTeam_name}
                     readOnly />
                 <br/>

                 <div className="zuschauer">
                    <label>Zuschauer:</label>
                    <input className="zuschauerInput"
                           type='number'
                           name="zuschauer"
                           value={this.state.zuschauer}
                           min={0}
                           readOnly/>
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
        <SpielTabelle/>
      </div>
    </div>
    );
  }
}

export default Uebersicht;
