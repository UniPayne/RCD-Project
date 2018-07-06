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
import GastTeam from "./GastTeam_Form";
import Tabelle from "./Tabelle";
import Spieler from "./Spieler";
import { Button } from 'semantic-ui-react';
import '../CSS/spielInfo_Popup.css';

class Spielinfos extends Component{
  constructor() {
    super();
    this.state = {
      form_spielnummer: '',
      form_spieldatum: '',
      form_liga_name: '',
      form_verband_name: '',
      form_gastTeam_name: '',
      form_heimTeam_name: '',
      form_austragungsort: '',
      form_zuschauer: '',
      showPopupGast: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

toggleGastPopup(){
  this.setState({showPopupGast: !this.state.showPopupGast});
}

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.checkAllFields();
    this.props.submitSpielinfosPopUp(this.state);
    this.props.closePopup();
  }

  checkAllFields(){
    this.checkSpielNr();
    this.checkSpielDatum();
    this.checkLigaName();
    this.checkVerbandName();
    this.checkHeimName();
    this.checkGastName();
    this.checkAustragungsort();
    this.checkZuschauer();
  }



  checkSpielNr(){
    if (this.state.form_spielnummer == ''){

    }
  }

  checkSpielDatum(){
    if (this.state.form_spieldatum == ''){
      return;
    }
  }

  checkLigaName(){
    if(this.state.form_liga_name == ''){
      return;
    }
  }

  checkVerbandName(){
    if(this.state.form_verband_name ==''){
      return;
    }
  }

  checkGastName(){
    if(this.state.form_gastTeam_name ==''){
      return;
    }
  }

  checkHeimName(){
    if(this.state.form_heimTeam_name ==''){
      return;
    }
  }

  checkAustragungsort(){
    if(this.state.form_austragungsort ==''){
      return;
    }
  }

  checkZuschauer(){
    if(this.state.form_zuschauer == ''){
      return;
    }
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
              <button className="button_pop" type="button"name="fortfahren" onClick={this.handleSubmit}>Speichern und Fortfahren</button>
            </form>
        </div>
      </div>

  )
}
}
export default Spielinfos;
