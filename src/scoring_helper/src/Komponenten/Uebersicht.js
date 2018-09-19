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
import Voreinstellungen from    "./Voreinstellungen";


//CSS
import '../CSS/uebersicht.css';
import '../CSS/spielInfo_Popup.css';


class Uebersicht extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      spielnummer:      this.props.vorSpielnummer,
      spieldatum:       this.props.vorSpieldatum,
      liga_name:        this.props.vorLiga,
      verband_name:     this.props.vorVerband,
      gastTeam_name:    this.props.vorGastTeam,
      heimTeam_name:    this.props.vorHeimTeam,
      austragungsort:   this.props.vorAustragungsort,
      zuschauer:        this.props.vorZuschauer,
      gastTeam:         this.props.vorGast,
      heimTeam:         this.props.vorHeim
    };
}

  render() {
    return (
    <div>
      <div className="wrapper_ue">
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
      </div>

       <div className="wrapper_ue2">
        <div className="wrapper_ue">
          <div className="spielerInformationen">
            <Spieler/>
          </div>
        </div>
      <div className="spielfeld">
        <SpielTabelle/>
      </div>

      <div>
          <NavLink to="/Voreinstellungen">
            <button className="button_zurueck" >zurück</button>

          </NavLink>
          <Route path="/Voreinstellungen" component={Voreinstellungen}/>
      </div>

{/*DIES IST EIN TEST UND KANN ANSCHLIE?END GELÖSCHT WERDEN*/}
      <div>
        <button onClick={console.log(this.state.spielnummer)}>Test</button>
      </div>


      </div>
    </div>
    );
  }
}

export default Uebersicht;
