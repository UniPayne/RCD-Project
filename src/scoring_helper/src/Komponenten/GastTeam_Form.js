import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import '../CSS/uebersicht.css';
import Uebersicht from "./Uebersicht";
import Vor_Spieler_Gast from "./Vor_Spieler_Gast";
import Tabelle from "./Tabelle";
import Spieler from "./Spieler";
import { Button } from 'semantic-ui-react';
import '../CSS/spielInfo_Popup.css';

class GastTeam_Form extends Component{
  constructor() {
    super();
    this.state = {
      perro:'form-control',
      input:'Speichern',
      form_gast_SpielerRNummer: '',
      form_gast_SpielerNName: '',
      form_gast_SpielerVName: '',
      form_gast_SpielerPosition: '',
      form_gast_SpielerPNummer: '',
      form_gast_spieler:[]
    };

    this.onSubmit = this.onSubmit.bind(this);
}

close(event){
  this.props.submitGastPopUp(this.state);
  //this.props.submitGastPopUp(this.state.form_gast_spieler);
  this.props.closePopup();
}


  onSubmit(event){
    event.preventDefault();
    if (this.submitInput.value== 'Speichern'){
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
      if(this.submitInput.value =='Bearbeiten'){
        const position = Number(this.rowRef.value);
        this.state.form_gast_spieler[position].form_gast_SpielerRNummer = this.gast_SpielerRNummer.value;
        this.state.form_gast_spieler[position].form_gast_SpielerNName = this.gast_SpielerNName.value;
        this.state.form_gast_spieler[position].form_gast_SpielerVName = this.gast_SpielerVName.value;
        this.state.form_gast_spieler[position].form_gast_SpielerPosition = this.gast_SpielerPosition.value;
        this.state.form_gast_spieler[position].form_gast_SpielerPNummer = this.gast_SpielerPNummer.value;
        this.state.input = 'Speichern';
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
  this.state.input = 'Bearbeiten';
  this.forceUpdate();
}

render() {
  return(
  <div className="SpielInfo_Popup">
    <div className="SpielInfo_Popup_inner">
  		<div className="container">
  			<form className="form-horizontal" role="form">
  				<h1>Gast Team eintragen</h1>
  				<div className="input-group">
  					<span className="input-group-addon">Rueckennummer</span>
  					<input required type="Number" ref={(ref) => this.gast_SpielerRNummer = ref} onChange={event => this.setState({form_gast_SpielerRNummer: event.target.value})}  value={this.state.form_gast_SpielerRNummer} className={this.state.perro}/>
  				</div>
  				<div className="input-group">
  					<span className="input-group-addon">Nachname</span>
  					<input type="text" required ref={(ref) => this.gast_SpielerNName = ref} onChange={event => this.setState({form_gast_SpielerNName: event.target.value})} value={this.state.form_gast_SpielerNName} className="form-control"  />
  				</div>
  				<div className="input-group">
  					<span className="input-group-addon">Vorname</span>
  					<input type="text" required ref={(ref) => this.gast_SpielerVName = ref} onChange={event => this.setState({form_gast_SpielerVName: event.target.value})} value={this.state.form_gast_SpielerVName} className="form-control"/>
  				</div>
          <div className="input-group">
  					<span className="input-group-addon">Position</span>
  					<input type="Number" required ref={(ref) => this.gast_SpielerPosition = ref} onChange={event => this.setState({form_gast_SpielerPosition: event.target.value})} value={this.state.form_gast_SpielerPosition} className="form-control"/>
  				</div>
          <div className="input-group">
  					<span className="input-group-addon">Passnummer</span>
  					<input type="Number" required ref={(ref) => this.gast_SpielerPNummer = ref} onChange={event => this.setState({form_gast_SpielerPNummer: event.target.value})} value={this.state.form_gast_SpielerPNummer} className="form-control"/>
  				</div>
  				<div className="form-group">
  					<div className="col-sm-offset-2 col-sm-10">
  					  <input type="button"  ref={(ref) => this.submitInput = ref} value={this.state.input} onClick={this.onSubmit.bind(this)} className="btn btn-default"/>
              <input type="button"  value="Schließen" onClick={this.close.bind(this)} className="btn btn-default"/>
  					</div>
  				</div>

  				<input type="hidden" className="row-ref" value="" ref={(ref) => this.rowRef = ref}/>
  			</form>
  			<div className="container" >
  				<table className="table table-hover">
  					<thead>
  						<tr>
  							<th>Rückennummer</th>
  							<th>Nachname</th>
  							<th>Vorname</th>
  							<th>Position</th>
                <th>Passnummer</th>
                <th>Optionen</th>
  						</tr>
  					</thead>
  					<tbody>

  						{this.state.form_gast_spieler.map((data,index) => {

  return <Row editRow= {this.editRow.bind(this)} users = {this.state.form_gast_spieler}  data = {data} key={index} row={index} deleteRow={this.deleteRow.bind(this)} />
  						})}

  					</tbody>
  				</table>
  			</div>
  		</div>
    </div>
  </div>
  	);
  }
  }
  class Row extends Component{
  	constructor(props){
  		super(props);
  	}

  	render(){
  		return (
  			<tr>
  				<td>{this.props.data.form_gast_SpielerRNummer}</td>

  				<td>{this.props.data.form_gast_SpielerNName}</td>

  				<td>{this.props.data.form_gast_SpielerVName}</td>

          <td>{this.props.data.form_gast_SpielerPosition}</td>

          <td>{this.props.data.form_gast_SpielerPNummer}</td>



  				<td className="glyphicon glyphicon-edit" onClick={() => {this.props.editRow(this.props.row)}} ><button>Bearbeiten</button></td>
          	<td className="glyphicon glyphicon-trash" value ="Loeschen" onClick={() => {this.props.deleteRow(this.props.row)}}><button>Löschen</button></td>
  			</tr>

  		);
  	}
  }
export default GastTeam_Form;
