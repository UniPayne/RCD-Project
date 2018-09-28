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
      letzterSpielerGast: 0,


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
      spielerGespieltGast: [],
      spielerGespieltHeim: [],

      gast_spieler:
      [
      {spielerRNummer: "11", spielerNName: "11", spielerVName: "11", spielerPosition: "11", spielerPNummer: "11", schlagPosition: 0,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ]},
      {spielerRNummer: "12", spielerNName: "12", spielerVName: "12", spielerPosition: "12", spielerPNummer: "12", schlagPosition: 1,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "13", spielerNName: "13", spielerVName: "13", spielerPosition: "13", spielerPNummer: "13", schlagPosition: 2,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "14", spielerNName: "14", spielerVName: "14", spielerPosition: "14", spielerPNummer: "14", schlagPosition: 3,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "15", spielerNName: "15", spielerVName: "15", spielerPosition: "15", spielerPNummer: "15", schlagPosition: 4,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "16", spielerNName: "16", spielerVName: "16", spielerPosition: "16", spielerPNummer: "16", schlagPosition: 5,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "17", spielerNName: "17", spielerVName: "17", spielerPosition: "17", spielerPNummer: "17", schlagPosition: 6,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "18", spielerNName: "18", spielerVName: "18", spielerPosition: "18", spielerPNummer: "18", schlagPosition: 7,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "19", spielerNName: "19", spielerVName: "19", spielerPosition: "19", spielerPNummer: "19", schlagPosition: 8,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],}
      ],

      heim_spieler:
      [
      {spielerRNummer: "21", spielerNName: "21", spielerVName: "21", spielerPosition: "21", spielerPNummer: "21", schlagPosition: 0,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ]},
      {spielerRNummer: "22", spielerNName: "22", spielerVName: "22", spielerPosition: "22", spielerPNummer: "22", schlagPosition: 1,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "23", spielerNName: "23", spielerVName: "23", spielerPosition: "23", spielerPNummer: "23", schlagPosition: 2,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "24", spielerNName: "24", spielerVName: "24", spielerPosition: "24", spielerPNummer: "24", schlagPosition: 3,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "25", spielerNName: "25", spielerVName: "25", spielerPosition: "25", spielerPNummer: "25", schlagPosition: 4,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "26", spielerNName: "26", spielerVName: "26", spielerPosition: "26", spielerPNummer: "26", schlagPosition: 5,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "27", spielerNName: "27", spielerVName: "27", spielerPosition: "27", spielerPNummer: "27", schlagPosition: 6,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "28", spielerNName: "28", spielerVName: "28", spielerPosition: "28", spielerPNummer: "28", schlagPosition: 7,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],},
      {spielerRNummer: "29", spielerNName: "29", spielerVName: "29", spielerPosition: "29", spielerPNummer: "29", schlagPosition: 8,
        inning: [
          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''},

          {ifeld:<Canvas/>,atBat: true, onBase: false, active: false, offenseBase: 0, out: false, outString0_1: '', outString1_2: '', outString2_3: '',outString3_4: '',
          strikeout:false, strikeout_looking:false, bb:false,sb1_2:false,sb2_3:false,sb3_4:false, out_by0_1:'',
          out_by1_2:'',out_by2_3:'', out_by3_4:'', b1: false, b2: false, b3: false, hr: false, bb1_2: false, bb2_3: false, bb3_4: false,
          hp: false,
          flyout:'', runnerMoved1_2:'', runnerMoved2_3:'', runnerMoved3_4:'', error1:'', error2:'', error3:'',
          cs1_2:'', cs2_3:''}

            ],}
      ],
    };


}

/*componentDidMount(){
  this.setState({spielerGespieltGast: [...this.state.spielerGespieltGast, this.state.gast_spieler[this.state.letzterSpielerGast]]});
  this.setState({spielerGespieltHeim: [...this.state.spielerGespieltHeim, this.state.heim_spieler[this.state.letzterSpielerHeim]]});
  this.setState({spielerGespieltGast: []});
  this.setState({spielerGespieltHeim: []});
}*/

inningreset(){
  if (this.state.gastTurn === true){
    this.setState({inninghalf: 'Bottom'});
    this.setState({hitsGastteam: (this.state.hitsInning +=this.state.hitsGastteam)});
    this.setState({errorsGastteam: (this.state.errorsGastteam += this.state.errorsInning)});
    this.setState({punkteGastteam: (this.state.punkte += this.state.hitsInning)});
    this.setState({team_name: this.state.heimTeam_name});

    this.setState({gastTurn: !this.state.gastTurn});
    this.setState({spielerGespieltGast: []});
  }else {
    this.setState({inninghalf: 'Top'});
    this.setState({hitsHeimteam: (this.state.hitsInning +=this.state.hitsHeimteam)});
    this.setState({errorsHeimteam: (this.state.errorsHeimteam += this.state.errorsInning)});
    this.setState({punkteHeimteam: (this.state.punkteHeimteam += this.state.punkteInning)});
    this.setState({team_name: this.state.gastTeam_name});

    this.setState({gastTurn: !this.state.gastTurn});
    this.setState({inning: this.state.inning+=1});
    this.setState({spielerGespieltHeim: []});
  }
    this.setState({outs: 0});
    this.setState({hitsInning: 0});
    this.setState({punkteInning: 0});
}

baseOnBalls(){
  let newState = Object.assign({}, this.state);

  if (this.state.gastTurn === true) {
    newState.gast_spieler[this.state.letzterSpielerGast].inning[this.state.inning].bb = true;
    newState.gast_spieler[this.state.letzterSpielerGast].inning[this.state.inning].atBat = false;
    newState.gast_spieler[this.state.letzterSpielerGast].inning[this.state.inning].onBase = true;
    newState.letzterSpielerGast++;
    this.setState(newState);
    this.setState({spielerGespieltGast: [...this.state.spielerGespieltGast, this.state.gast_spieler[this.state.letzterSpielerGast]]}, () => {
      console.log(this.state.spielerGespieltGast);
    });
  } else {
    newState.heim_spieler[this.state.letzterSpielerHeim].inning[this.state.inning].bb = true;
    this.setState(newState);
  }


}

hit(){

}

twoBases(){

}

triple(){

}

homerun(){

}

hitByPitch(){

}

fieldersChoice(){

}
strikeout(){

}

strikeoutLooking(){

}

outDialog(){

}

stolenBase(){

}

runnerOneBase(){

}

runnerTwoBases(){

}

runnerThreeBases(){

}

flyout(){

}


render() {
  const heim = this.state.gast_spieler;
  const gast = this.state.heim_spieler;
  const inning = this.state.inning+1;
  const currentGastSpieler = gast[this.state.letzterSpielerGast];
  const currentHeimSpieler = heim[this.state.letzterSpielerHeim];



  let Spieler;
  let Action;

  if((currentGastSpieler.inning[this.state.inning].atBat) === true){
    Action=(
      <div>
        <Button className= "button_pop_" onClick={this.baseOnBalls.bind(this)}>BB</Button>
        <Button className= "button_pop_" onClick={this.hit.bind(this)}>1B</Button>
        <Button className= "button_pop_" onClick={this.twoBases.bind(this)}>2B</Button>
        <Button className= "button_pop_" onClick={this.triple.bind(this)}>3B</Button>
        <Button className= "button_pop_" onClick={this.homerun.bind(this)}>HR</Button>
        <Button className= "button_pop_" onClick={this.hitByPitch.bind(this)}>HP</Button>
        <Button className= "button_pop_" onClick={this.fieldersChoice.bind(this)}>FC</Button>
        <Button className= "button_pop_" onClick={this.strikeout.bind(this)}>K</Button>
        <Button className= "button_pop_" onClick={this.strikeoutLooking.bind(this)}>K Looking</Button>
        <Button className= "button_pop_" onClick={this.flyout.bind(this)}>Flyout</Button>
        <Button className= "button_pop_" onClick={this.outDialog.bind(this)}>Out By...</Button>
      </div>
    )
  } else if ((currentGastSpieler.inning[this.state.inning].atBat) === false &&
              (currentGastSpieler.inning[this.state.inning].onBase) === true) {
    Action=(
      <div>
        <Button onClick={this.stolenBase.bind(this)}>SB</Button>
        <Button onClick={this.runnerOneBase.bind(this)}>Runner Advanced 1B</Button>
        <Button onClick={this.runnerTwoBases.bind(this)}>Runner Advanced 2B</Button>
        <Button onClick={this.runnerThreeBases.bind(this)}>Runner Advanced 3B</Button>
      </div>
    )

  } else {
    Action = (
      <div>
      </div>
    )
  }


  const spielerGast = this.state.spielerGespieltGast || [];

if(this.state.gastTurn === true){
  Spieler=(
    <tr>
    {
      spielerGast.map(spielerI => (
        <td className="spielerInfos">
          <label>Nachname: {spielerI.spielerNName}</label>
          <label>Vorname: {spielerI.spielerVName}</label>
          <label>Nummer: {spielerI.spielerRNummer}</label>
          {spielerI.inning[this.state.inning].ifeld}
        </td>
        <td className="SpielerAktionen">
          {Action}
        </td>
    ))}
  </tr>
)

    } else {
  Spieler=(
        <tr>
          <td className="spielerInfos">
            <label>Nachname: {currentHeimSpieler.spielerNName}, Vorname: {currentHeimSpieler.spielerVName}, Nummer: {currentHeimSpieler.spielerRNummer}</label>
          </td>
          <td className="SpielerAktionen">
            {Action}
          </td>
        </tr>
        )
      }




  return (
    <div>
      <div className="spielinformationen_Inning_oben">
        <Table>
          <tbody>
          <tr>
            <td>
              <label className="inning_info_label_header">Team:</label>
              <label className="inning_info_label_content">{this.state.team_name}</label>
            </td>
            <td>
              <label className="inning_info_label_header">Outs:</label>
              <label className="inning_info_label_content">{this.state.outs}</label>
            </td>
            <td>
              <label className="inning_info_label_header">Hits:</label>
              <label className="inning_info_label_content">{this.state.hitsInning}</label>
            </td>
            <td>
              <label className="inning_info_label_header">Errors:</label>
              <label className="inning_info_label_content">{this.state.errorsInning} </label>
            </td>
            <td>
              <label className="inning_info_label_content">{this.state.inninghalf}</label>
              <label className="inning_info_label_header">of the</label>
              <label className="inning_info_label_content">{inning}</label>
              <label className="inning_info_label_header">Inning</label>
            </td>
            <td>
              <button className="inning_Ende_Button" onClick={this.inningreset.bind(this)}>Inning beenden</button>
            </td>
          </tr>
          </tbody>
        </Table>
      </div>
      <div className="spielablauf">
        <Table className="spielablauf_table">
          <tbody className="inhalt">

              {Spieler}

          </tbody>
        </Table>
      </div>
</div>
  )
};
}

export default SpielPopup;
