import { Table, Flag } from 'semantic-ui-react'
import '../CSS/spieler.css';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";

class Vor_Spieler_Gast extends Component{
  constructor(props){
    super(props);
    this.state={
      gast_SpielerRNummer: '',
      gast_SpielerNName: '',
      gast_SpielerVName: '',
      gast_SpielerPosition: '',
      gast_SpielerPNummer: '',
    }



};

  render(){
    return (
        <Table className="spie">
    <Table.Header className="header">
      <Table.Row>
        <Table.HeaderCell>RueckenNr.</Table.HeaderCell>
        <Table.HeaderCell>Nachname</Table.HeaderCell>
        <Table.HeaderCell>Vorname</Table.HeaderCell>
        <Table.HeaderCell>PosNr.</Table.HeaderCell>
        <Table.HeaderCell>PassNr.</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        <Table.Row className="tabInhalt">
          <Table.Cell>{this.state.gast_SpielerRNummer}</Table.Cell>
          <Table.Cell>{this.state.gast_SpielerNName}</Table.Cell>
          <Table.Cell>{this.state.gast_SpielerVName}</Table.Cell>
          <Table.Cell>{this.state.gast_SpielerPosition}</Table.Cell>
          <Table.Cell>{this.state.gast_SpielerPNummer}</Table.Cell>
        </Table.Row>
    </Table.Body>
  </Table>

);
}}
export default Vor_Spieler_Gast;
