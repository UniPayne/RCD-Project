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
import '../CSS/gastTeam_form.css';


class GastTeam_Form extends Component{
  constructor(props) {
    super(props);
    this.title = props.title;
    this.state = {
      perro:'form-control',
      input:'Speichern',
      spielerRNummer: '',
      spielerNName: '',
      spielerVName: '',
      spielerPosition: '',
      spielerPNummer: '',
      spielerArray: props.currentArray
    };

    this.onSubmit = this.onSubmit.bind(this);
}

close(event){
  event.preventDefault();


  if (this.state.spielerArray.length >= 9){
    this.props.submitGastPopUp(this.state);
    this.props.closePopup();
   }else {
     alert('Es müssen mindestens 9 Spieler eingetragen werden!');
  }

}


  onSubmit(event){
    event.preventDefault();
    if (this.submitInput.value== 'Speichern'){
      const obj = {
        spielerRNummer: this.state.spielerRNummer,
        spielerNName: this.state.spielerNName,
        spielerVName: this.state.spielerVName,
        spielerPosition: this.state.spielerPosition,
        spielerPNummer: this.state.spielerPNummer
      };

      if (  this.state.spielerRNummer ===''||
        this.state.spielerNName ===''||
        this.state.spielerVName ===''||
        this.state.spielerPosition ===''||
        this.state.spielerPNummer === ''){
          alert('Sie müssen alle Felder ausfüllen!');
        }

      this.setState({spielerArray:[...this.state.spielerArray, obj],
        spielerRNummer: '',
        spielerNName: '',
        spielerVName: '',
        spielerPosition: '',
        spielerPNummer: ''});


    }else
      if(this.submitInput.value =='Uebernehmen'){
        const position = Number(this.rowRef.value);
        this.state.spieler[position].spielerRNummer = this.gast_SpielerRNummer.value;
        this.state.spieler[position].spielerNName = this.gast_SpielerNName.value;
        this.state.spieler[position].spielerVName = this.gast_SpielerVName.value;
        this.state.spieler[position].spielerPosition = this.gast_SpielerPosition.value;
        this.state.spieler[position].spielerPNummer = this.gast_SpielerPNummer.value;
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

  this.state.spielerRNummer = '';
  this.state.spielerNName  = '';
  this.state.spielerVName  = '';
  this.state.spielerPosition = '';
  this.state.spielerPNummer  = '';
}

deleteRow(row){
  var position = this.state.spielerArray.indexOf(row);
  this.setState({spielerArray:this.state.spielerArray.slice(0,position)});
  this.clearInputs();

}

editRow(row){
  var position = this.state.spielerArray.indexOf(row);

  this.gast_SpielerRNummer.value = this.state.spielerArray[row].spielerRNummer;
  this.state.spielerRNummer = this.state.spielerArray[row].spielerRNummer;

  this.gast_SpielerNName.value = this.state.spielerArray[row].spielerNName;
  this.state.spielerNName = this.state.spielerArray[row].spielerNName;

  this.gast_SpielerVName.value = this.state.spielerArray[row].spielerVName;
  this.state.spielerVName = this.state.spielerArray[row].spielerVName;

  this.gast_SpielerPosition.value = this.state.spielerArray[row].spielerPosition;
  this.state.spielerPosition = this.state.spielerArray[row].spielerPosition;

  this.gast_SpielerPNummer.value = this.state.spielerArray[row].spielerPNummer;
  this.state.spielerPNummer = this.state.spielerArray[row].spielerPNummer;

  this.rowRef.value = row;
  this.state.input = 'Uebernehmen';
  this.forceUpdate();
}

render() {
  return(
  <div className="SpielInfo_Popup">
    <div className="SpielInfo_Popup_inner">

  		<div>
  			<form role="form">
          {
          <h1>{this.title} Team eintragen</h1>
          }
          <div className="gast_pop">
            <div className="rechts_pop">
          <div>
  					<span>Rueckennummer:</span>
  					<input id="" required type="Number" ref={(ref) => this.gast_SpielerRNummer = ref} onChange={event => this.setState({spielerRNummer: event.target.value})}  value={this.state.spielerRNummer} className={this.state.perro}/>
  				</div>
  				<div>
  					<span>Nachname:</span>
  					<input type="text" required ref={(ref) => this.gast_SpielerNName = ref} onChange={event => this.setState({spielerNName: event.target.value})} value={this.state.spielerNName} className="form-control"  />
  				</div>
  				<div>
  					<span>Vorname:</span>
  					<input type="text" required ref={(ref) => this.gast_SpielerVName = ref} onChange={event => this.setState({spielerVName: event.target.value})} value={this.state.spielerVName} className="form-control"/>
  				</div>
        </div>
        <div className="links_pop">
          <div>
  					<span>Position:</span>
  					<input type="Number" required ref={(ref) => this.gast_SpielerPosition = ref} onChange={event => this.setState({spielerPosition: event.target.value})} value={this.state.spielerPosition} className="form-control"/>
  				</div>
          <div>
  					<span>Passnummer:</span>
  					<input type="Number" required ref={(ref) => this.gast_SpielerPNummer = ref} onChange={event => this.setState({spielerPNummer: event.target.value})} value={this.state.spielerPNummer} className="form-control"/>
  				</div>
  				<div>
          </div>
        </div>
        </div>
  					<div className="button_div">
  					  <input className="button_speichern" type="button"  ref={(ref) => this.submitInput = ref} value={this.state.input} onClick={this.onSubmit.bind(this)}/>
              <input className="button_schließen" type="button"  value="Schließen" onClick={this.close.bind(this)} />
  					</div>

  				<input type="hidden" className="row-ref" value="" ref={(ref) => this.rowRef = ref}/>
  			</form>
  			<div className="tab_pop">
  				<table>
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

  						{this.state.spielerArray.map((data,index) => {

  return <Row editRow= {this.editRow.bind(this)} users = {this.state.spielerArray}  data = {data} key={index} row={index} deleteRow={this.deleteRow.bind(this)} />
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
  				<td>{this.props.data.spielerRNummer}</td>

  				<td>{this.props.data.spielerNName}</td>

  				<td>{this.props.data.spielerVName}</td>

          <td>{this.props.data.spielerPosition}</td>

          <td>{this.props.data.spielerPNummer}</td>



  				<td className="glyphicon glyphicon-edit" onClick={() => {this.props.editRow(this.props.row)}} ><button>Bearbeiten</button></td>
          	<td className="glyphicon glyphicon-trash" value ="Loeschen" onClick={() => {this.props.deleteRow(this.props.row)}}><button>Löschen</button></td>
  			</tr>

  		);
  	}
  }
export default GastTeam_Form;
