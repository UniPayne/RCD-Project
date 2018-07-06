import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import '../CSS/uebersicht.css';
import GastTeam from "./GastTeam_Form";
import Spielinfos from "./Spielinfos";
import Tabelle from "./Tabelle";
import Spieler from "./Spieler";
import { Button } from 'semantic-ui-react';
import '../CSS/spielInfo_Popup.css';
import ReactModal from 'react-modal';

class Uebersicht extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spielnummer: '',
      spieldatum: '',
      liga_name: '',
      verband_name: '',
      gastTeam_name: '',
      heimTeam_name: '',
      austragungsort: '',
      zuschauer: '',
      showPopup: false
    };


}

togglePopup() {
  this.setState({showPopup: !this.state.showPopup});
}

submitSpielinfosMain(stati){

  this.setState({spielnummer:stati.form_spielnummer});
  this.setState({spieldatum:stati.form_spieldatum});
  this.setState({liga_name:stati.form_liga_name});
  this.setState({verband_name:stati.form_verband_name});
  this.setState({gastTeam_name:stati.form_gastTeam_name});
  this.setState({heimTeam_name:stati.form_heimTeam_name});
  this.setState({austragungsort:stati.form_austragungsort});
  this.setState({zuschauer:stati.form_zuschauer});
}


  render() {
    return (
    <div>
      <div className="spielInformationen_links">
        <div className="links">
          <form>
            <label>SpielNr:</label>
            <input type='number' name="spielnummer" value={this.state.spielnummer} min={0} readOnly /><br/>
            <label>Verband:</label>
            <input type='text' name="verband_name" value={this.state.verband_name} maxLength={20} readOnly /><br/>
            <label>Gast:</label>
            <input type='text' name="gastTeam_name" maxLength={20} value={this.state.gastTeam_name} readOnly /><br/>

            <label className="in">Austragungsort:</label>
            <input className="inInput" type='text' name="austragungsort" value={this.state.austragungsort} maxLength={20} readOnly/><br/>

          </form>
        </div>

        <div className="rechts">
            <div className="gespieltAm">
              <label>Gespielt am:</label>
              <input type='Date' name="spielDatum" value={this.state.spieldatum} readOnly/>
            </div>
              <label>Liga:</label>
              <input type='text' name="liga_name" maxLength={20} value={this.state.liga_name} readOnly /><br/>

              <label>Heim:</label>
              <input type='text' name="heimTeam_name" maxLength={20} value={this.state.heimTeam_name} readOnly /><br/>
            <div className="zuschauer">
              <label>Zuschauer:</label>
              <input className="zuschauerInput" name="zuschauer" type='number'value={this.state.zuschauer} min={0} readOnly/>

{/* Popup startet hier*/}

            <div className="sInfo">
              <button className="button_pop" onClick={this.togglePopup.bind(this)}>Informationen eintragen</button>
              {this.state.showPopup ?

                  <Spielinfos submitSpielinfosPopUp={this.submitSpielinfosMain.bind(this)}
                    closePopup={this.togglePopup.bind(this)}
                    />


                :null
              }
            </div>

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
        <Button>Click Here</Button>
      </div>
      <div className="spielfeld">
      </div>
    </div>
    );
  }
}

export default Uebersicht;
