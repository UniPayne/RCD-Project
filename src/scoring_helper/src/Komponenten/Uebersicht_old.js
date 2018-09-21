import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import ReactModal from 'react-modal';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

//Komponenten
import Tabelle from         "./Tabelle";
import Spieler from         "./Spieler";
import SpielTabelle from    "./SpielTabelle";
import Voreinstellungen from    "./Voreinstellungen";


//CSS
import '../CSS/uebersicht.css';
import '../CSS/spielInfo_Popup.css';

/*
die alten Values von den Spielinfos
value={this.props.location.spielinfos.spielnummer}
value={this.props.location.spielinfos.verband_name}
value={this.props.location.spielinfos.gastTeam_name}
value={this.props.location.spielinfos.austragungsort}
value={this.props.location.spielinfos.spieldatum}
value={this.props.location.spielinfos.liga_name}
value={this.props.location.spielinfos.heimTeam_name}
value={this.props.location.spielinfos.zuschauer}
*/
class Uebersicht extends React.Component {
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
                   value={1}
                   min={0}
                   readOnly />
                 <br/>

            <label>Verband:</label>
            <input type='text'
                   name="verband_name"
                   value={"DBV"}
                   maxLength={20}
                   readOnly />
                 <br/>

            <label>Gast:</label>
            <input type='text'
                   name="gastTeam_name"
                   maxLength={20}
                   value={"Farmers"}
                   readOnly />
                 <br/>

            <label className="in">Austragungsort:</label>
            <input className="inInput"
                   type='text'
                   name="austragungsort"
                   value={"Bünde"}
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
                     value={2018-11-1}
                     readOnly/>
            </div>

            <label>Liga:</label>
            <input type='text'
                   name="liga_name"
                   maxLength={20}
                   value={"1. BL"}
                   readOnly />
                 <br/>

              <label>Heim:</label>
              <input type='text'
                     name="heimTeam_name"
                     maxLength={20}
                     value={"PB U"}
                     readOnly />
                 <br/>

                 <div className="zuschauer">
                    <label>Zuschauer:</label>
                    <input className="zuschauerInput"
                           type='number'
                           name="zuschauer"
                           value={100}
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


      </div>
    </div>
    );
  }
}
export default Uebersicht;
