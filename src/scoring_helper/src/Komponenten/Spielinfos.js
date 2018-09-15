import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import { Button } from 'semantic-ui-react';

//Komponenten
import Uebersicht from "./Uebersicht"
import GastTeam from "./GastTeam_Form";
import Tabelle from "./Tabelle";


//CSS
import '../CSS/spielInfo_Popup.css';
import '../CSS/uebersicht.css';

class Spielinfos extends Component{
  constructor(props) {
    super(props);
    this.state = {
      form_spielnummer:     props.currentSpielNr,
      form_spieldatum:      props.currSpielDatum,
      form_liga_name:       props.currLigaName,
      form_verband_name:    props.currVerbandName,
      form_gastTeam_name:   props.currGastTeamName,
      form_heimTeam_name:   props.currHeimTeamName,
      form_austragungsort:  props.currAustragungsOrt,
      form_zuschauer:       props.currZuschauer,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.bye = this.bye.bind(this);
}

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.state.form_spielnummer === '' ||
        this.state.form_spieldatum === '' ||
        this.state.form_liga_name === '' ||
        this.state.form_verband_name === '' ||
        this.state.form_gastTeam_name === '' ||
        this.state.form_heimTeam_name === '' ||
        this.state.form_austragungsort === '' ||
        this.state.form_zuschauer === '') {
          alert("Sie müssen alle Felder ausfüllen!");
        }else {
          this.props.submitSpielinfosPopUp(this.state);
          this.props.closePopup();
        }

  }

  bye(event){
    event.preventDefault();
    this.props.closePopup();
  }

render() {
  return (
    <div className="SpielInfo_Popup">
        <div className="SpielInfo_Popup_inner">
            <h1>Spielinformationen</h1>
            <form>
                <div className="linksPop">
                    <label>SpielNr:</label>
                        <input  type='text'
                          name="form_spielnummer"
                          maxLength={20}
                          onChange={this.handleChange}
                          value={this.state.form_spielnummer}/>

                        <br/>

                    <label>Gespielt am:</label>
                        <input  type="Date"
                          name="form_spieldatum"
                          onChange={this.handleChange}
                          value={this.state.form_spieldatum}/>
                        <br/>

                    <label>Liga:</label>
                        <input  type='text'
                          name="form_liga_name"
                          maxLength={20}
                          onChange={this.handleChange}
                          value={this.state.form_liga_name}/>
                        <br/>

                    <label>Verband:</label>
                        <input type='text'
                          name="form_verband_name"
                          maxLength={20}
                          onChange={this.handleChange}
                          value={this.state.form_verband_name}/>
                        <br/>
                </div>

                <div className="rechtsPop">
                    <label>Gast:</label>
                        <input required type='text'
                          name="form_gastTeam_name"
                          maxLength={20}
                          onChange={this.handleChange}
                          value={this.state.form_gastTeam_name}/>
                        <br/>

                    <label>Heim:</label>
                        <input required type='text'
                          name="form_heimTeam_name"
                          maxLength={20}
                          onChange={this.handleChange}
                          value={this.state.form_heimTeam_name}/>
                        <br/>

                    <label>Austragungsort:</label>
                        <input required type="text"
                          name="form_austragungsort"
                          maxLength={20}
                          onChange={this.handleChange}
                          value={this.state.form_austragungsort}/>
                        <br/>

                    <label>Zuschauer:</label>
                        <input required type="number"
                          name="form_zuschauer"
                          min={0}
                          onChange={this.handleChange}
                          value={this.state.form_zuschauer}/>
                        <br/>
                </div>
                <input className="button_abbrechen_spielInf" type="button" value="Abbrechen" onClick={this.bye.bind(this)}/>
                <button className="button_pop" type="button"name="fortfahren" onClick={this.handleSubmit}>Speichern und Fortfahren</button>
            </form>
        </div>
      </div>

  )
}
}
export default Spielinfos;
