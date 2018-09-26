import React, { Component } from "react";
import {Route, NavLink, HashRouter, Link} from "react-router-dom";
import Popup from "reactjs-popup";
import ReactModal from 'react-modal';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Table, Flag } from 'semantic-ui-react';

//Komponenten
import Uebersicht         from    "./Uebersicht";
import Canvas             from    "./Canvas";
import Voreinstellungen   from    "./Voreinstellungen";


//CSS
import '../CSS/spielpopup.css';

class SpielPopup extends Component{
  constructor(props){
    super(props);
    this.state = {
    /*Die fürs Programm wichtige

      gastTeam_name:  this.props.location.spielinfos.gastTeam_name,
      heimTeam_name:  this.props.location.spielinfos.heimTeam_name,
      team_name: this.props.location.spielinfos.gastTeam_name,
      gast_spieler:   this.props.location.spielinfos.gast_spieler,
      heim_spieler:   this.props.location.spielinfos.heim_spieler,
      spielnummer:    this.props.location.spielinfos.spielnummer,
      verband_name:   this.props.location.spielinfos.verband_name,
      austragungsort: this.props.location.spielinfos.austragungsort,
      spieldatum: this.props.location.spielinfos.spieldatum,
      liga_name: this.props.location.spielinfos.liga_name,
      zuschauer: this.props.location.spielinfos.zuschauer,

*/

// Folgenden Block nach der Testphase löschen
      gastTeam_name:  'Dohren Wild Farmers',
      heimTeam_name:  'Paderborn Untouchables',
      team_name:      'Dohren Wild Farmers',
      spielnummer:    '3',
      verband_name:   'DBV',
      austragungsort: 'Paderborn',
      spieldatum:     '2018-11-01',
      liga_name:      '1. BL',
      zuschauer:      '300',
// Bis hier

      inning: 0,
      inninghalf: 'Top',
      letzterSpielerHeim: 0,
      letzterSpielerGast: 1,


      outs:             0,
      hitsInning:       0,
      errorsInning:     0,
      punkteInning:     0,

      hitsGastteam:   0,
      errorsGastteam: 0,
      punkteGastteam: 0,


      hitsHeimteam:   0,
      errorsHeimteam: 0,
      punkteHeimteam: 0,

      gastTurn: true,

      gast_spieler:
      [
      {spielerRNummer: "11", spielerNName: "11", spielerVName: "11", spielerPosition: "11", spielerPNummer: "11",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ]},
      {spielerRNummer: "12", spielerNName: "12", spielerVName: "12", spielerPosition: "12", spielerPNummer: "12",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "13", spielerNName: "13", spielerVName: "13", spielerPosition: "13", spielerPNummer: "13",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "14", spielerNName: "14", spielerVName: "14", spielerPosition: "14", spielerPNummer: "14",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "15", spielerNName: "15", spielerVName: "15", spielerPosition: "15", spielerPNummer: "15",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "16", spielerNName: "16", spielerVName: "16", spielerPosition: "16", spielerPNummer: "16",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "17", spielerNName: "17", spielerVName: "17", spielerPosition: "17", spielerPNummer: "17",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "18", spielerNName: "18", spielerVName: "18", spielerPosition: "18", spielerPNummer: "18",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "19", spielerNName: "19", spielerVName: "19", spielerPosition: "19", spielerPNummer: "19",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],}
      ],

      heim_spieler:
      [
      {spielerRNummer: "21", spielerNName: "21", spielerVName: "21", spielerPosition: "21", spielerPNummer: "21",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ]},
      {spielerRNummer: "22", spielerNName: "22", spielerVName: "22", spielerPosition: "22", spielerPNummer: "22",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "23", spielerNName: "23", spielerVName: "23", spielerPosition: "23", spielerPNummer: "23",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "24", spielerNName: "24", spielerVName: "24", spielerPosition: "24", spielerPNummer: "24",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "25", spielerNName: "25", spielerVName: "25", spielerPosition: "25", spielerPNummer: "25",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "26", spielerNName: "26", spielerVName: "26", spielerPosition: "26", spielerPNummer: "26",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "27", spielerNName: "27", spielerVName: "27", spielerPosition: "27", spielerPNummer: "27",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "28", spielerNName: "28", spielerVName: "28", spielerPosition: "28", spielerPNummer: "28",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "29", spielerNName: "29", spielerVName: "29", spielerPosition: "29", spielerPNummer: "29",
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],}
      ],
    };
}

inningreset(){
  if (this.state.gastTurn === true){
    this.setState({inninghalf: 'Bottom'});
    this.setState({hitsGastteam: (this.state.hitsInning +=this.state.hitsGastteam)});
    this.setState({errorsGastteam: (this.state.errorsGastteam += this.state.errorsInning)});
    this.setState({punkteGastteam: (this.state.punkte += this.state.hitsInning)});
    this.setState({team_name: this.state.heimTeam_name});

    this.setState({gastTurn: !this.state.gastTurn});
  }else {
    this.setState({inninghalf: 'Top'});
    this.setState({hitsHeimteam: (this.state.hitsInning +=this.state.hitsHeimteam)});
    this.setState({errorsHeimteam: (this.state.errorsHeimteam += this.state.errorsInning)});
    this.setState({punkteHeimteam: (this.state.punkteHeimteam += this.state.punkteInning)});
    this.setState({team_name: this.state.gastTeam_name});

    this.setState({gastTurn: !this.state.gastTurn});
    this.setState({inning: this.state.inning+=1});
  }
    this.setState({outs: 0});
    this.setState({hitsInning: 0});
    this.setState({punkteInning: 0});
}

render() {
  return (
    <div>
      <div className="spielinformationen_Inning_oben">
        <Table>
          <tr>
            <label className="inning_info_label_header">Team:</label>
            <label className="inning_info_label_content">{this.state.team_name}    </label>
            <label className="inning_info_label_header">Outs:</label>
            <label className="inning_info_label_content">{this.state.outs}</label>
            <label className="inning_info_label_header">Hits:</label>
            <label className="inning_info_label_content">{this.state.hitsInning}</label>
            <label className="inning_info_label_header">Errors:</label>
            <label className="inning_info_label_content">{this.state.errorsInning} </label>
            <label className="inning_info_label_content">{this.state.inninghalf}</label>
            <label className="inning_info_label_header">of the</label>
            <label className="inning_info_label_content">{this.state.inning+1}</label>
            <label className="inning_info_label_header">Inning</label>

            <button className="inning_Ende_Button" onClick={this.inningreset.bind(this)}>Inning beenden</button>
          </tr>
        </Table>
      </div>
      <div className="spielablauf">
        <Table className="spielablauf_table">


        </Table>
      </div>
</div>
  )
};
}

export default SpielPopup;
