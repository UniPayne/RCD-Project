import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import ReactModal from 'react-modal';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Table, Flag } from 'semantic-ui-react'

//Komponenten
import Tabelle from             "./Tabelle";
import SpielerHeim from         "./Spieler";
import SpielTabelle from        "./SpielTabelle";
import Voreinstellungen from    "./Voreinstellungen";


//CSS
import '../CSS/uebersicht.css';

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
  constructor(props) {
    super(props);
    this.state = {
      gast_spieler:
      [
      {spielerRNummer: "11", spielerNName: "11", spielerVName: "11", spielerPosition: "11", spielerPNummer: "11"},
      {spielerRNummer: "12", spielerNName: "12", spielerVName: "12", spielerPosition: "12", spielerPNummer: "12"},
      {spielerRNummer: "13", spielerNName: "13", spielerVName: "13", spielerPosition: "13", spielerPNummer: "13"},
      {spielerRNummer: "14", spielerNName: "14", spielerVName: "14", spielerPosition: "14", spielerPNummer: "14"},
      {spielerRNummer: "15", spielerNName: "15", spielerVName: "15", spielerPosition: "15", spielerPNummer: "15"},
      {spielerRNummer: "16", spielerNName: "16", spielerVName: "16", spielerPosition: "16", spielerPNummer: "16"},
      {spielerRNummer: "17", spielerNName: "17", spielerVName: "17", spielerPosition: "17", spielerPNummer: "17"},
      {spielerRNummer: "18", spielerNName: "18", spielerVName: "18", spielerPosition: "18", spielerPNummer: "18"},
      {spielerRNummer: "19", spielerNName: "19", spielerVName: "19", spielerPosition: "19", spielerPNummer: "19"}
      ],
    };
}



  render() {
    const gast = this.state.gast_spieler;
    {/*Start definition Gasttabelle*/}
    let GastTableBody;
    if (gast.length > 0){
      GastTableBody=(
    <Table.Body>
      {
        gast.map(spielerI => (
        <Table.Row className="tabInhalt" key={spielerI.spielerPNummer.toString()}>
          <Table.Cell>{spielerI.spielerRNummer}</Table.Cell>
          <Table.Cell>{spielerI.spielerNName}</Table.Cell>
          <Table.Cell>{spielerI.spielerVName}</Table.Cell>
          <Table.Cell>{spielerI.spielerPosition}</Table.Cell>
          <Table.Cell>{spielerI.spielerPNummer} </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>)
  }
{/*Ende definition Gasttabelle*/}

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
            <Table.Header className="headerUebersicht">
                    <Table.Row >
                      <Table.HeaderCell>  RueckenNr.  </Table.HeaderCell>
                      <Table.HeaderCell>  Nachname    </Table.HeaderCell>
                      <Table.HeaderCell>  Vorname     </Table.HeaderCell>
                      <Table.HeaderCell>  PosNr.      </Table.HeaderCell>
                      <Table.HeaderCell>  PassNr.     </Table.HeaderCell>
                      <Table.HeaderCell>  1           </Table.HeaderCell>
                      <Table.HeaderCell>  2           </Table.HeaderCell>
                      <Table.HeaderCell>  3           </Table.HeaderCell>
                      <Table.HeaderCell>  4           </Table.HeaderCell>
                      <Table.HeaderCell>  5           </Table.HeaderCell>
                      <Table.HeaderCell>  6           </Table.HeaderCell>
                      <Table.HeaderCell>  7           </Table.HeaderCell>
                      <Table.HeaderCell>  8           </Table.HeaderCell>
                      <Table.HeaderCell>  9           </Table.HeaderCell>
                      <Table.HeaderCell> 10           </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body >
                    <Table.Row className="inhaltT">
                      <Table.Cell><canvas ref={canvasHex => this.canvasHex =canvasHex}> </canvas></Table.Cell>
                      <Table.Cell><canvas ref={canvasHex => this.canvasHex =canvasHex}> </canvas></Table.Cell>



                    </Table.Row>
                  </Table.Body>
                  {GastTableBody}

          </div>
        </div>

      <div>
          <NavLink to="/Voreinstellungen">
            <button className="button_zurueck" >zurück</button>
          </NavLink>
      </div>


      </div>
    </div>
    );
  }
}
export default Uebersicht;
