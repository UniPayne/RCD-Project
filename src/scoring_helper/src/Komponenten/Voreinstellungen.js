import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
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

      info_ok:                false,


      gast_spieler: [],
      gast_ok:                false,

      heim_spieler: [],
      heim_ok:                false,

      showInfoPopup:          false,
      showGastPopup:          false,
      showHeimPopup:          false
    }

}
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
  //this.setState({info_ok:         !this.state.info_ok});
  console.log(this.state.info_ok);
}


submitGastMain(stati){
  this.setState({gast_spieler: stati.spielerArray}, () => {
     console.log(this.state.gast_spieler);
   });

}


submitHeimMain(stati){
  this.setState({heim_spieler: stati.spielerArray}, () => {
     console.log(this.state.heim_spieler);
   });
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
        <Table.Row className="tabInhalt">
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



{/*Start definition GHeimtabelle*/}
  let HeimTableBody;
  if (heim.length > 0){
    HeimTableBody=(
  <Table.Body>
    {
      heim.map(spielerI => (
      <Table.Row className="tabInhalt">
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
        <HashRouter>
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
      <GastTeam_Form submitGastPopUp={this.submitGastMain.bind(this)} title="Gast" currentArray = {this.state.gast_spieler}
        closePopup={this.toggleGastPopup.bind(this)}/>
      :null
    }

  <button className="vor_button_heim" onClick={this.toggleHeimPopup.bind(this)}>Heimteam bearbeiten</button>
      {this.state.showHeimPopup ?
        <GastTeam_Form submitGastPopUp={this.submitHeimMain.bind(this)} title="Heim" currentArray = {this.state.heim_spieler}
          closePopup={this.toggleHeimPopup.bind(this)}/>
        :null
      }
  </div>
{/*Ende Button zum hinzufügen der Spieler*/}


          <div >
              <NavLink to="/Uebersicht">
                <button className="vor_button_weiter">weiter</button>
                {/*
                  s
                  vorSpielnummer ={this.state.spielnummer}
                  vorSpieldatum ={this.state.spieldatum}
                  vorLiga ={this.state.liga_name}
                  vorVerband ={this.state.verband_name}
                  vorGastTeam ={this.state.gastTeam_name}
                  vorHeimTeam ={this.state.heimTeam_name}
                  vorAustragungsort ={this.state.austragungsort}
                  vorZuschauer ={this.state.zuschauer}
                  vorGast ={this.state.gast_spieler}
                  vorHeim ={this.state.heim_spieler}
              */}
              </NavLink>
              <Route path="/Uebersicht" component={Uebersicht}/>
            </div>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Voreinstellungen;
