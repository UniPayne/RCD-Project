import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import '../CSS/uebersicht.css';
import Uebersicht from "./Uebersicht"

import Tabelle from "./Tabelle";
import Spieler from "./Spieler";
import { Button } from 'semantic-ui-react';
import '../CSS/spielInfo_Popup.css';

class GastTeam_Form extends Component{
  constructor() {
    super();
    this.state = {
      perro:'form-control',
      input:'Submit',
      form_gast_SpielerRNummer: '',
      form_gast_SpielerNName: '',
      form_gast_SpielerVName: '',
      form_gast_SpielerPosition: '',
      form_gast_SpielerPNummer: '',
      form_gast_spieler:[]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}


  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.submitSpielinfosPopUp(this.state);
    this.props.closePopup();
  }

  eintragen(event){
    event.prefentDefault();
    if (this.submitInput.value== 'Submit'){
      const obj = {
        form_gast_SpielerRNummer: this.state.form_gast_SpielerRNummer,
        form_gast_SpielerNName: this.state.form_gast_SpielerNName,
        form_gast_SpielerVName: this.state.form_gast_SpielerVName,
        form_gast_SpielerPosition: this.state.form_gast_SpielerPosition,
        form_gast_SpielerPNummer: this.state.form_gast_SpielerPNummer
      };
      this.setState({form_gast_spieler:[...this.state.form_gast_spieler, obj],
        form_gast_SpielerRNummer: '',
        form_gast_SpielerNName: '',
        form_gast_SpielerVName: '',
        form_gast_SpielerPosition: '',
        form_gast_SpielerPNummer: ''});
    }else
      if(this.submitInput.value =='Edit'){
        const position = Number(this.rowRef.value);
        this.state.form_gast_spieler[position].form_gast_SpielerRNummer = this.gast_SpielerRNummer.value;
        this.state.form_gast_spieler[position].form_gast_SpielerNName = this.gast_SpielerNName.value;
        this.state.form_gast_spieler[position].form_gast_SpielerVName = this.gast_SpielerVName.value;
        this.state.form_gast_spieler[position].form_gast_SpielerPosition = this.gast_SpielerPosition.value;
        this.state.form_gast_spieler[position].form_gast_SpielerPNummer = this.gast_SpielerPNummer.value;
        this.submitInput.value = 'Submit';
        this.clearInputs();
        this.forceUpdate();

      }
  }

clearInputs() {
  this.gast_SpielerRNummer.value = '';
  this.gast_SpielerNName.value = '';
  this.gast_SpielerVName.value = '';
  this.gast_SpielerPosition.value = '';
  this.gast_SpielerPNummer.value = '';

  this.state.form_gast_SpielerRNummer = '';
  this.state.form_gast_SpielerNName  = '';
  this.state.form_gast_SpielerVName  = '';
  this.state.form_gast_SpielerPosition = '';
  this.state.form_gast_SpielerPNummer  = '';
}

deleteRow(row){
  var position = this.state.form_gast_spieler.indexOf(row);
  this.setState({form_gast_spieler:this.state.form_gast_spieler.slice(0,position)});
  this.clearInputs();

}

editRow(row){
  var position = this.state.form_gast_spieler.indexOf(row);

  this.gast_SpielerRNummer.value = this.state.form_gast_spieler[row].form_gast_SpielerRNummer;
  this.state.form_gast_SpielerRNummer = this.state.form_gast_spieler[row].form_gast_SpielerRNummer;

  this.gast_SpielerNName.value = this.state.form_gast_spieler[row].form_gast_SpielerNName;
  this.state.form_gast_SpielerNName = this.state.form_gast_spieler[row].form_gast_SpielerNName;

  this.gast_SpielerVName.value = this.state.form_gast_spieler[row].form_gast_SpielerVName;
  this.state.form_gast_SpielerVName = this.state.form_gast_spieler[row].form_gast_SpielerVName;

  this.gast_SpielerPosition.value = this.state.form_gast_spieler[row].form_gast_SpielerPosition;
  this.state.form_gast_SpielerPosition = this.state.form_gast_spieler[row].form_gast_SpielerPosition;

  this.gast_SpielerPNummer.value = this.state.form_gast_spieler[row].form_gast_SpielerPNummer;
  this.state.form_gast_SpielerPNummer = this.state.form_gast_spieler[row].form_gast_SpielerPNummer;

  this.rowRef.value = row;
  this.state.input = 'Edit';
  this.forceUpdate();
}

render() {
  return (

        <div className="SpielInfo_Popup">
          <div className="SpielInfo_Popup_inner">
          <h1>Spielinformationen</h1>

          <form>
            <div className="linksPop">
            <label>SpielNr:</label>
              <input type='text' name="form_spielnummer" maxLength={20} onChange={this.handleChange}/> <br/>
              <label>Gespielt am:</label>
              <input type="Date" name="form_spieldatum" onChange={this.handleChange}/><br/>
              <label>Liga:</label>
              <input type='text' name="form_liga_name" maxLength={20} onChange={this.handleChange}/> <br/>
              <label>Verband:</label>
              <input type='text'name="form_verband_name" maxLength={20} onChange={this.handleChange}/> <br/>
            </div>
            <div className="rechtsPop">
              <label>Gast:</label>
              <input type='text' name="form_gastTeam_name" maxLength={20} onChange={this.handleChange}/> <br/>
              <label>Heim:</label>
              <input type='text'name="form_heimTeam_name" maxLength={20} onChange={this.handleChange}/> <br/>
              <label>Austragungsort:</label>
              <input type="text" name="form_austragungsort" maxLength={20} onChange={this.handleChange}/> <br/>
              <label>Zuschauer:</label>
              <input type="number" name="form_zuschauer" min={0} onChange={this.handleChange}/> <br/>

          </div>
              <button className="button_pop" type="button"name="fortfahren" onClick={this.handleSubmit}>Gast Team Eintragen</button>
            </form>
        </div>
      </div>

  )
}
}
export default GastTeam_Form;
