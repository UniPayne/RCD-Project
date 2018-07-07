import { Table, Flag } from 'semantic-ui-react'
import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";

//Komponenten
import GastTeam_Form from "./GastTeam_Form";

//CSS
import '../CSS/spieler.css';

class Vor_Spieler_Gast extends Component{
  constructor(props){
    super(props);
    this.state={
      gast_spieler:[],
      gast_SpielerRNummer:    '',
      gast_SpielerNName:      '',
      gast_SpielerVName:      '',
      gast_SpielerPosition:   '',
      gast_SpielerPNummer:    '',
    }
};

submitGastTabelle(stati){
  this.setState({gast_spieler:            stati.form_gast_spieler});
  this.setState({gast_SpielerRNummer:     stati.form_gast_SpielerRNummer});
  this.setState({gast_SpielerNName:       stati.form_gast_SpielerNName});
  this.setState({gast_SpielerVName:       stati.form_gast_SpielerVName});
  this.setState({gast_SpielerPosition:    stati.form_gast_SpielerPosition});
  this.setState({gast_SpielerPNummer:     stati.form_gast_SpielerPNummer});
}

  render(){
    return (
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

);
}}
export default Vor_Spieler_Gast;
