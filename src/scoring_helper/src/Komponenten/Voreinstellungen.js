import React, { Component } from "react";
import {Route, Link, HashRouter} from "react-router-dom";
import logo from '../logo.png';
import { Table, Flag } from 'semantic-ui-react'

//Komponenten
import Uebersicht from "./Uebersicht";
import Spielinfos from "./Spielinfos";
import GastTeam_Form from "./GastTeam_Form";

//CSS
import "../CSS/home.css";
import "../CSS/voreinstellungen.css";
import '../CSS/spielInfo_Popup.css';
import '../CSS/spieler.css';

class Voreinstellungen extends Component {
/*
Das ist der Standard Konstruktor. Für Testzwecke wurde der darunter angelegt.
Am Ende einfach den unteren wieder löschen.

constructor(props){
    super(props);
    this.state = {
      spielnummer:            '',
      spieldatum:             '',
      liga_name:              '',
      verband_name:           '',
      gastTeam_name:          '',
      heimTeam_name:          '',
      austragungsort:         '',
      zuschauer:              '',

      showInfoPopup:          false,
      info_ok:                false,

      showGastPopup:          false,
      gast_spieler:              [],
      gast_ok:                false,

      showHeimPopup:          false,
      heim_spieler:              [],
      heim_ok:                false,
    }
}

Lösche von Hier -->*/
constructor(props){
  super(props);
  this.state = {
    spielnummer:            '3',
    spieldatum:             '2018-07-28',
    liga_name:              'Bundesliga',
    verband_name:           'DBV',
    gastTeam_name:          'Dohren Wild Farmers',
    heimTeam_name:          'Paderborn Untouchables',
    austragungsort:         'Paderborn',
    zuschauer:              '100',

    showInfoPopup:          false,
    info_ok:                false,

    showGastPopup:          false,
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
    gast_ok:                false,

    showHeimPopup:          false,
    heim_spieler:
    [
      {spielerRNummer: "21", spielerNName: "21", spielerVName: "21", spielerPosition: "21", spielerPNummer: "21"},
      {spielerRNummer: "22", spielerNName: "22", spielerVName: "22", spielerPosition: "22", spielerPNummer: "22"},
      {spielerRNummer: "23", spielerNName: "23", spielerVName: "23", spielerPosition: "23", spielerPNummer: "23"},
      {spielerRNummer: "24", spielerNName: "24", spielerVName: "24", spielerPosition: "24", spielerPNummer: "24"},
      {spielerRNummer: "25", spielerNName: "25", spielerVName: "25", spielerPosition: "25", spielerPNummer: "25"},
      {spielerRNummer: "26", spielerNName: "26", spielerVName: "26", spielerPosition: "26", spielerPNummer: "26"},
      {spielerRNummer: "27", spielerNName: "27", spielerVName: "27", spielerPosition: "27", spielerPNummer: "27"},
      {spielerRNummer: "28", spielerNName: "28", spielerVName: "28", spielerPosition: "28", spielerPNummer: "28"},
      {spielerRNummer: "29", spielerNName: "29", spielerVName: "29", spielerPosition: "29", spielerPNummer: "29"}
    ],
    heim_ok:                false,
    alles_ok: false,
  }
}
// <-- bis hier!



toggleInfoPopup() {
  this.setState({showInfoPopup: !this.state.showInfoPopup});
}

toggleGastPopup(){
  this.setState({showGastPopup: !this.state.showGastPopup});
}

toggleHeimPopup(){
  this.setState({showHeimPopup: !this.state.showHeimPopup});
}


submitSpielinfosMain(stati){
  this.setState({spielnummer:     stati.form_spielnummer});
  this.setState({spieldatum:      stati.form_spieldatum});
  this.setState({liga_name:       stati.form_liga_name});
  this.setState({verband_name:    stati.form_verband_name});
  this.setState({gastTeam_name:   stati.form_gastTeam_name});
  this.setState({heimTeam_name:   stati.form_heimTeam_name});
  this.setState({austragungsort:  stati.form_austragungsort});
  this.setState({zuschauer:       stati.form_zuschauer});
  this.setState({info_ok:         stati.form_info},() => {
  console.log("Voreinstellungen Info_ok: ",this.state.info_ok);
  } );
  if (this.state.info_ok === true &&
      this.state.gast_ok === true &&
      this.state.heim_ok === true){
        this.setState({alles_ok: true}, () => {
          console.log("alles:ok: ", this.state.alles_ok);
        });
      }
      else {
        this.setState({alles_ok: false}, () => {
          console.log("alles:ok: ", this.state.alles_ok);
      });
}

}


submitGastMain(stati){
  this.setState({gast_ok: stati.form_gast_ok}, () => {
     console.log("Voreinstellungen GastOk: ", this.state.gast_ok);
   });
  this.setState({gast_spieler: stati.spielerArray}, () => {
     console.log(this.state.gast_spieler);
   });
   if (this.state.info_ok === true &&
       this.state.gast_ok === true &&
       this.state.heim_ok === true){
         this.setState({alles_ok: true}, () => {
           console.log("alles:ok: ", this.state.alles_ok);
         });
       }
       else {
         this.setState({alles_ok: false}, () => {
           console.log("alles:ok: ", this.state.alles_ok);
       });
 }
}


submitHeimMain(stati){
  this.setState({heim_ok: stati.form_heim_ok}, () => {
     console.log("Voreinstellungen HeimOk: ", this.state.heim_ok);
   });
  this.setState({heim_spieler: stati.spielerArray}, () => {
     console.log(this.state.heim_spieler);
   });
   if (this.state.info_ok === true &&
       this.state.gast_ok === true &&
       this.state.heim_ok === true){
         this.setState({alles_ok: true}, () => {
           console.log("alles:ok: ", this.state.alles_ok);
         });
       }
       else {
         this.setState({alles_ok: false}, () => {
           console.log("alles:ok: ", this.state.alles_ok);
       });
 }
}


  render() {
    const gast = this.state.gast_spieler || [];
    const heim = this.state.heim_spieler || [];


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
          <Table.Cell>{spielerI.spielerPNummer}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>)
  }
{/*Ende definition Gasttabelle*/}



{/*Start definition Heimtabelle*/}
  let HeimTableBody;
  if (heim.length > 0){
    HeimTableBody=(
  <Table.Body>
    {
      heim.map(spielerI => (
      <Table.Row className="tabInhalt"key={spielerI.spielerPNummer.toString()}>
        <Table.Cell>{spielerI.spielerRNummer}</Table.Cell>
        <Table.Cell>{spielerI.spielerNName}</Table.Cell>
        <Table.Cell>{spielerI.spielerVName}</Table.Cell>
        <Table.Cell>{spielerI.spielerPosition}</Table.Cell>
        <Table.Cell>{spielerI.spielerPNummer}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>)
}
{/*Ende Definition Heimtabelle*/}


    return (
          <div>

{/*Start Spielinformationen*/}
            <div className="vor_oben">
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
                      <div className="sInfo">
                          <button className="button_inf_eintragen" onClick={this.toggleInfoPopup.bind(this)}>Informationen eintragen</button>
                          {
                            this.state.showInfoPopup ?
                            <Spielinfos
                              submitSpielinfosPopUp={this.submitSpielinfosMain.bind(this)}
                              closePopup={this.toggleInfoPopup.bind(this)}

                              currentSpielNr={this.state.spielnummer}
                              currSpielDatum={this.state.spieldatum}
                              currLigaName={this.state.liga_name}
                              currVerbandName={this.state.verband_name}
                              currGastTeamName={this.state.gastTeam_name}
                              currHeimTeamName={this.state.heimTeam_name}
                              currAustragungsOrt={this.state.austragungsort}
                              currZuschauer={this.state.zuschauer}
                              currInfo={this.state.info_ok}
                            />
                            :null
                          }
                        </div>
                      </div>
                    </div>
                  </div>
              <img src={logo} className="logo" alt="logo" />
            </div>
          </div>
{/*Ende Spielinfos*/}



          <div className="vor_heim_gast_border">

{/*Start Gastteam*/}
            <div className="vor_gast">
              <label>Gast</label>
                <Table className="spie">
                  <Table.Header className="header">
                    <Table.Row >
                      <Table.HeaderCell>  RueckenNr.  </Table.HeaderCell>
                      <Table.HeaderCell>  Nachname    </Table.HeaderCell>
                      <Table.HeaderCell>  Vorname     </Table.HeaderCell>
                      <Table.HeaderCell>  PosNr.      </Table.HeaderCell>
                      <Table.HeaderCell>  PassNr.     </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                {GastTableBody}
                </Table>

                </div>

{/*Ende Gastteam*/}


{/*Start Heimteam*/}
            <div className="vor_heim">
                <label>Heim</label>
                  <Table className="spie">
                    <Table.Header className="header">
                      <Table.Row>
                        <Table.HeaderCell>  RueckenNr.  </Table.HeaderCell>
                        <Table.HeaderCell>  Nachname    </Table.HeaderCell>
                        <Table.HeaderCell>  Vorname     </Table.HeaderCell>
                        <Table.HeaderCell>  PosNr.      </Table.HeaderCell>
                        <Table.HeaderCell>  PassNr.     </Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                  {HeimTableBody}
                  </Table>
          </div>
{/*Ende Heimteam*/}


{/*Start Button zum hinzufügen der Spieler*/}
<div>
<button
    className="vor_button_gast"
    onClick={this.toggleGastPopup.bind(this)}>Gastteam bearbeiten</button>
    {this.state.showGastPopup ?
      <GastTeam_Form
        submitGastPopUp={this.submitGastMain.bind(this)}
        title="Gast"
        currentArray = {this.state.gast_spieler}
        gastOk = {this.state.gast_ok}
        closePopup={this.toggleGastPopup.bind(this)}/>
      :null
    }

  <button className="vor_button_heim"
    onClick={this.toggleHeimPopup.bind(this)}>Heimteam bearbeiten</button>
      {this.state.showHeimPopup ?
        <GastTeam_Form
          submitGastPopUp={this.submitHeimMain.bind(this)}
          title="Heim"
          currentArray = {this.state.heim_spieler}
          heimOk = {this.state.heim_ok}
          closePopup={this.toggleHeimPopup.bind(this)}/>
        :null
      }
  </div>
{/*Ende Button zum hinzufügen der Spieler*/}


          <div className="navigation_buttons_unten">
              <Link to={{
				  pathname: '/Uebersicht',
				  spielinfos: this.state
			  }}>
                <button disabled={!this.state.alles_ok}className="vor_button_weiter">Spiel Starten</button>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default Voreinstellungen;
