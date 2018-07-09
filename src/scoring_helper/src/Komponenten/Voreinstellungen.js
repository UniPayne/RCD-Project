import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import logo from '../logo.svg';
import { Table, Flag } from 'semantic-ui-react'


//Komponenten
import Vor_Spieler_Heim from "./Vor_Spieler_Heim";
import Vor_Spieler_Gast from "./Vor_Spieler_Gast";
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

      gast_spieler: [],
      gast_SpielerRNummer: '',
      gast_SpielerNName: '',
      gast_SpielerVName: '',
      gast_SpielerPosition: '',
      gast_SpielerPNummer: '',

      gast_spieler:           '',
      gast_SpielerRNummer:    '',
      gast_SpielerNName:      '',
      gast_SpielerVName:      '',
      gast_SpielerPosition:   '',
      gast_SpielerPNummer:    '',


      heim_SpielerRNummer:    '',
      heim_SpielerNName:      '',
      heim_SpielerVName:      '',
      heim_SpielerPosition:   '',
      heim_SpielerPNummer:    '',


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
}


submitGastMain(stati){
  this.setState({gast_spieler:        stati.form_gast_spieler});
  this.setState({gast_SpielerRNummer: stati.form_gast_SpielerRNummer});
  this.setState({gast_SpielerNName:   stati.form_gast_SpielerNName});
  this.setState({gast_SpielerVName:   stati.form_gast_SpielerVName});
  this.setState({gast_SpielerPNummer: stati.form_gast_SpielerPNummer});
  console.log(this.state.gast_SpielerRNummer);

/*
  this.setState({gast_spieler: stati.form_gast_spieler});
  this.setState({gast_SpielerRNummer: stati.form_gast_SpielerRNummer});
  this.setState({gast_SpielerNName: stati.form_gast_SpielerNName});
  this.setState({gast_SpielerVName: stati.form_gast_SpielerVName});
  this.setState({gast_SpielerPosition: stati.form_gast_SpielerPosition});
  this.setState({gast_SpielerPNummer: stati.form_gast_SpielerPNummer});
  */

  // mit mapping probieren..
  //{stati.map}(stati.form_gast_spieler =>


        // {spieler.map(spielerI => (
        //   <Table.Row className="tabInhalt">
        //     <Table.Cell>{spielerI.nr}</Table.Cell>
        //     <Table.Cell>{spielerI.name}</Table.Cell>
        //     <Table.Cell>{spielerI.vorname}</Table.Cell>
        //     <Table.Cell>{spielerI.posNr}</Table.Cell>
        //     <Table.Cell>{spielerI.passnr}</Table.Cell>
        //   </Table.Row>
        // ))}
          // this.setState({gast_spieler:[...stati.form_gast_spieler]}, () => {
          //   console.log('Gast Spieler: ' + this.state.gast_spieler);
          // });
  /*
          this.setState({gast_SpielerRNummer: stati.form_gast_SpielerRNummer}, () => {
            console.log('ARNummer: ' + this.state.gast_SpielerRNummer);
          });

          this.setState({gast_SpielerNName: stati.form_gast_SpielerNName}, () => {
            console.log('ANName:' + this.state.gast_SpielerNName);
          });

          this.setState({gast_SpielerVName: stati.form_gast_SpielerVName}, () => {
            console.log('AVName:' + this.state.gast_SpielerVName);
          });

          this.setState({gast_SpielerPosition: stati.form_gast_SpielerPosition}, () => {
            console.log('Position:' + this.state.gast_SpielerPosition);
          });

          this.setState({gast_SpielerPNummer: stati.form_gast_SpielerPNummer}, () => {
            console.log('PNummer:' + this.state.gast_SpielerPNummer);
          });
  */


          // this.setState({gast_SpielerRNummer: stati.form_gast_spieler});
          // this.setState({gast_SpielerNName: stati.form_gast_SpielerNName});
          // this.setState({gast_SpielerVName: stati.form_gast_SpielerVName});
          // this.setState({gast_SpielerPNummer: stati.form_gast_SpielerPNummer});
          console.log(stati.form_gast_spieler);
    // console.log(this.state.gast_spieler);
    // console.log(this.state.gast_SpielerRNummer);
    //       this.submitGastTabelle
    //console.log('RNummer:' + stati.form_gast_SpielerRNummer);
    //console.log(this.state.gast_SpielerRNummer);
}


submitHeimMain(stati){
  //Füllen wenn Gast funktioniert wie es soll
}



  render() {
    return (
        <HashRouter>
          <div>

            {/*Hier sind die Allgemeinen Spielinformationen eingetragen*/}
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
                      <button className="button_pop" onClick={this.toggleInfoPopup.bind(this)}>Informationen eintragen</button>
                      {this.state.showInfoPopup ?

                      <Spielinfos submitSpielinfosPopUp={this.submitSpielinfosMain.bind(this)}
                        closePopup={this.toggleInfoPopup.bind(this)}
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

          <div className="vor_unten">

            {/*Hier sind die Informationen des Gast Teams eingetragen*/}
            <div className="vor_gast">
              <label>Gast</label>
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
                  <Table.Body>
                    <Table.Row className="tabInhalt">
                      <Table.Cell>  {this.state.gast_SpielerRNummer}  </Table.Cell>
                      <Table.Cell>  {this.state.gast_SpielerNName}    </Table.Cell>
                      <Table.Cell>  {this.state.gast_SpielerVName}    </Table.Cell>
                      <Table.Cell>  {this.state.gast_SpielerPosition} </Table.Cell>
                      <Table.Cell>  {this.state.gast_SpielerPNummer}  </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <div>
                    <button className="button_pop1" onClick={this.toggleGastPopup.bind(this)}>Gastteam anlegen</button>
                    {this.state.showGastPopup ?
                      <GastTeam_Form submitGastPopUp={this.submitGastMain.bind(this)}
                        closePopup={this.toggleGastPopup.bind(this)}/>
                      :null
                    }
                  </div>
            </div>

            {/*Hier sind die Informationen des Heim Teams eingetragen*/}
            <div className="vor_heim">
                <label>Heim</label>
                <Vor_Spieler_Heim/>


              <button className="button_heim">Heim</button>
            </div>
          </div>

            <div classname="vor_button">
              <NavLink to="/Uebersicht"><button >weiter</button></NavLink>
              <Route path="/Uebersicht" component={Uebersicht}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default Voreinstellungen;
