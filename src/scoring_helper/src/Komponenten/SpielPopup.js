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
import FlyoutPopup        from    "./FlyoutPopup";


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
      flyoutPopup: false,

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

this.baseOnBalls = this.baseOnBalls.bind(this);
this.hit = this.hit.bind(this);
this.twoBases = this.twoBases.bind(this);
this.triple = this.triple.bind(this);
this.homerun = this.homerun.bind(this);
this.hitByPitch = this.hitByPitch.bind(this);
this.fieldersChoice = this.fieldersChoice.bind(this);
this.strikeout = this.strikeout.bind(this);
this.strikeoutLooking = this.strikeoutLooking.bind(this);
this.flyout = this.flyout.bind(this);
this.outDialog = this.outDialog.bind(this);
this.stolenBase = this.stolenBase.bind(this);
this.coughtStealing = this.coughtStealing.bind(this);
this.runnerOneBase = this.runnerOneBase.bind(this);
this.runnerTwoBases = this.runnerTwoBases.bind(this);
this.runnerThreeBases = this.runnerThreeBases.bind(this);
this.toggleFlyoutPopup = this.toggleFlyoutPopup.bind(this);
}

componentDidMount(){
  this.setState({spielerGespieltGast: [...this.state.spielerGespieltGast, this.state.gast_spieler[this.state.letzterSpielerGast]]});
  this.setState({spielerGespieltHeim: [...this.state.spielerGespieltHeim, this.state.heim_spieler[this.state.letzterSpielerHeim]]});
}

async toggleFlyoutPopup(spielerI){
//Asynchronität boxt mich komplett raus...
await this.setState({flyoutPopup: !this.state.flyoutPopup}, () => {
        this.flyout(spielerI);
  })
}


//  old version if new works, delete
// inningreset(){
//   if (this.state.gastTurn === true){
//     this.setState({inninghalf: 'Bottom'});
//     this.setState({hitsGastteam: (this.state.hitsInning +=this.state.hitsGastteam)});
//     this.setState({errorsGastteam: (this.state.errorsGastteam += this.state.errorsInning)});
//     this.setState({punkteGastteam: (this.state.punkte += this.state.hitsInning)});
//     this.setState({team_name: this.state.heimTeam_name});
//     this.setState({gastTurn: !this.state.gastTurn});
//     this.setState({spielerGespieltGast: []}, () => {
//       console.log(this.state.spielerGespieltGast);
//     });
//     this.setState({spielerGespieltGast: this.state.gast_spieler[this.state.letzterSpielerGast+1]}, () => {
//       console.log(this.state.spielerGespieltGast);
//
//     });
//   }else {
//     this.setState({inninghalf: 'Top'});
//     this.setState({hitsHeimteam: (this.state.hitsInning +=this.state.hitsHeimteam)});
//     this.setState({errorsHeimteam: (this.state.errorsHeimteam += this.state.errorsInning)});
//     this.setState({punkteHeimteam: (this.state.punkteHeimteam += this.state.punkteInning)});
//     this.setState({team_name: this.state.gastTeam_name});
//
//     this.setState({gastTurn: !this.state.gastTurn});
//     this.setState({inning: this.state.inning+=1});
//     this.setState({spielerGespieltHeim: []});
//     this.setState({spielerGespieltHeim: this.state.heim_spieler[this.state.letzterSpielerHeim]});
//   }
//     this.setState({outs: 0});
//     this.setState({hitsInning: 0});
//     this.setState({punkteInning: 0});
// }

inningreset(){
  let newState =  Object.assign({}, this.state);
  if (newState.gastTurn === true){
    newState.inninghalf = 'Bottom';
    newState.hitsGastteam += newState.hitsInning;
    newState.errorsHeimteam += newState.errorsInning;
    newState.punkteGastteam += newState.punkteInning;
    newState.team_name = newState.gastTeam_name;
    newState.spielerGespieltGast.length = 0;
      if(newState.letzterSpielerGast < newState.gast_spieler.length+1){
        newState.spielerGespieltGast.push(newState.gast_spieler[newState.letzterSpielerGast]);
      }else{
        newState.letzterSpielerGast = 0;
        newState.spielerGespieltGast.push(newState.gast_spieler[newState.letzterSpielerGast]);
      }
  }else{
    let newState =  Object.assign({}, this.state);
    newState.inninghalf = 'Top';
    newState.hitsHeimteam += newState.hitsInning;
    newState.errorsGastteam += newState.errorsInning;
    newState.punkteHeimteam += newState.punkteInning;
    newState.team_name = newState.gastTeam_name;
    newState.inning+=1;
    newState.spielerGespieltHeim.length = 0;
      if(newState.letzterSpielerHeim < newState.heim_spieler.length+1){
        newState.spielerGespieltHeim.push(newState.heim_spieler[newState.letzterSpielerHeim]);
      }else{
        newState.letzterSpielerHeim = 0;
        newState.spielerGespieltHeim.push(newState.heim_spieler[newState.letzterSpielerHeim]);
      }
  }
  newState.outs = 0;
  newState.hitsInning = 0;
  newState.punkteInning = 0;
  this.setState(newState);
  this.setState({gastTurn: !this.state.gastTurn}, () => {
    console.log(this.state.gastTurn);
  });
}

nextPlayer(){
  if(this.state.gastTurn === true){
    if(this.state.letzterSpielerGast <= this.state.gast_spieler.length){
      let newState =  Object.assign({}, this.state);
      newState.letzterSpielerGast+=1;
      newState.spielerGespieltGast.push(newState.gast_spieler[newState.letzterSpielerGast]);
      this.setState(newState);
      }else{
        let newState =  Object.assign({}, this.state);
        newState.letzterSpielerGast = 0;
        this.setState(newState);

    }
  }else{
    if(this.state.letzterSpielerHeim <= this.state.heim_spieler.length){
      let newState =  Object.assign({}, this.state);
      newState.letzterSpielerHeim+=1;
      newState.spielerGespieltHeim.push(newState.heim_spieler[newState.letzterSpielerHeim]);
      console.log(newState.letzterSpielerHeim);
      this.setState(newState);
      }else{
        let newState =  Object.assign({}, this.state);
        newState.letzterSpielerHeim = 0;
        this.setState(newState);
    }
    }
}


punkteCheck(spielerI){
  console.log(spielerI);
  if (this.state.gastTurn === true){
    if (spielerI.inning[this.state.inning].offenseBase >=4) {
      spielerI.inning[this.state.inning].onBase = false;
      this.setState({punkteGastteam: this.state.punkteGastteam+=1});
    }
  } else {
    if (spielerI.inning[this.state.inning].offenseBase >=4) {
      spielerI.inning[this.state.inning].onBase = false;
      this.setState({punkteGastteam: this.state.punkteHeimteam+=1});
    }
  }
}

baseOnBalls(spielerI) {
let spieler = Object.assign({}, spielerI);
spieler.inning[this.state.inning].onBase = true;
spieler.inning[this.state.inning].atBat = false;
spieler.inning[this.state.inning].bb = true;
spieler.inning[this.state.inning].offenseBase = 1;
this.setState({spieler}, () => {
  console.log(spieler);
});
this.nextPlayer();
}



hit(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = true;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].b1 = true;
  spieler.inning[this.state.inning].offenseBase = 1;
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.setState({hitsInning: this.state.hitsInning+=1});
  this.nextPlayer();
}

twoBases(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = true;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].offenseBase = 2;
  spieler.inning[this.state.inning].b2 = true;
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.setState({hitsInning: this.state.hitsInning+=1});
  this.nextPlayer();
}

triple(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = true;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].offenseBase = 3;
  spieler.inning[this.state.inning].b3 = true;
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.setState({hitsInning: this.state.hitsInning+=1});
  this.nextPlayer();
}

homerun(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = false;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].hr = true;
  spieler.inning[this.state.inning].offenseBase = 4;
  this.punkteCheck(spieler);
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.setState({hitsInning: this.state.hitsInning+=1});
  this.nextPlayer();
}

hitByPitch(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = true;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].hp = true;
  spieler.inning[this.state.inning].offenseBase = 1;
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.nextPlayer();
}

fieldersChoice(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = true;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].offenseBase = +1;
  this.punkteCheck(spieler);
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.setState({outs: (this.state.outs +=1)});
  this.nextPlayer();

}
strikeout(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = false;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].strikeout = true;
  spieler.inning[this.state.inning].out = true;
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.setState({outs: (this.state.outs +=1)});
  this.nextPlayer();
}

strikeoutLooking(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = false;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].out = true;
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.setState({outs: (this.state.outs +=1)});
  this.nextPlayer();
}

outDialog(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = false;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].out = true;
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.setState({outs: (this.state.outs +=1)});
  this.nextPlayer();
}

flyout(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].onBase = false;
  spieler.inning[this.state.inning].atBat = false;
  spieler.inning[this.state.inning].out = true;
  this.setState({spieler}, () => {
    console.log(spieler);
  });
  this.setState({outs: (this.state.outs +=1)});
  this.nextPlayer();
}

stolenBase(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].offenseBase +=1;
  this.punkteCheck(spieler);
  this.setState({spieler}, () => {
    console.log(spieler);
  });
}

runnerOneBase(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].offenseBase +=1;
  this.punkteCheck(spieler);
  this.setState({spieler}, () => {
    console.log(spieler);
  });
}

runnerTwoBases(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].offenseBase +=2;
  this.punkteCheck(spieler);
  this.setState({spieler}, () => {
    console.log(spieler);
  });
}

runnerThreeBases(spielerI){
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].offenseBase+=3;
  this.punkteCheck(spieler);
  this.setState({spieler}, () => {
    console.log(spieler);
  });
}



coughtStealing(spielerI) {
  let spieler = Object.assign({}, spielerI);
  spieler.inning[this.state.inning].out = true;
  spieler.inning[this.state.inning].onBase = false;
  this.setState({spieler}, () => {
    console.log(spieler);
  });
}


render() {
  const spielerGast = this.state.spielerGespieltGast;
  const spielerHeim = this.state.spielerGespieltHeim;
  let Spieler;

if(this.state.gastTurn === true){
  Spieler=(
    <Table.Body>
    {
      spielerGast.map(spielerI => (
      <Table.Row key={spielerI.spielerPNummer.toString()}>
        <td className="spielerInfos">
          <label>Nachname: {spielerI.spielerNName}</label>
          <label>Vorname: {spielerI.spielerVName}</label>
          <label>Nummer: {spielerI.spielerRNummer}</label>
        </td>
        <td>
        {spielerI.inning[this.state.inning].ifeld}
        </td>
        {
          spielerI.inning[this.state.inning].atBat ? (
          <td className="SpielerAktionen">
            <Button className= "button_pop_" onClick={() => this.baseOnBalls(spielerI)}>BB</Button>
            <Button className= "button_pop_" onClick={() => this.hit(spielerI)}>1B</Button>
            <Button className= "button_pop_" onClick={() => this.twoBases(spielerI)}>2B</Button>
            <Button className= "button_pop_" onClick={() => this.triple(spielerI)}>3B</Button>
            <Button className= "button_pop_" onClick={() => this.homerun(spielerI)}>HR</Button>
            <Button className= "button_pop_" onClick={() => this.hitByPitch(spielerI)}>HP</Button>
            <Button className= "button_pop_" onClick={() => this.fieldersChoice(spielerI)}>FC</Button>
            <Button className= "button_pop_" onClick={() => this.strikeout(spielerI)}>K</Button>
            <Button className= "button_pop_" onClick={() => this.strikeoutLooking(spielerI)}>K Looking</Button>
            <Button className= "button_pop_" onClick={() => this.toggleFlyoutPopup(spielerI)}>Flyout</Button>
            <Button className= "button_pop_" onClick={() => this.outDialog(spielerI)}>Out By...</Button>
          </td>
        ) : (
          <td>
          </td>
        )
      }
      {
        spielerI.inning[this.state.inning].onBase ? (
          <td className="SpielerAktionen">
            <Button className= "button_pop_" onClick={() => this.stolenBase(spielerI)}>SB</Button>
            <Button className= "button_pop_" onClick={() => this.coughtStealing(spielerI)}>CS</Button>
            <Button className= "button_pop_" onClick={() => this.runnerOneBase(spielerI)}>Runner Advanced 1B</Button>
            <Button className= "button_pop_" onClick={() => this.runnerTwoBases(spielerI)}>Runner Advanced 2B</Button>
            <Button className= "button_pop_" onClick={() => this.runnerThreeBases(spielerI)}>Runner Advanced 3B</Button>
          </td>
          ):(
          <td>
          </td>
        )
      }
      {spielerI.inning[this.state.inning].out ? (<td></td>):(<td></td>)}
      </Table.Row>
    ))
  }
</Table.Body>
)
    } else {
      Spieler=(
        <Table.Body>
        {
          spielerHeim.map(spielerI => (
          <Table.Row key={spielerI.spielerPNummer.toString()}>
            <td className="spielerInfos">
              <label>Nachname: {spielerI.spielerNName}</label>
              <label>Vorname: {spielerI.spielerVName}</label>
              <label>Nummer: {spielerI.spielerRNummer}</label>
            </td>
            <td>
            {spielerI.inning[this.state.inning].ifeld}
            </td>
            {
              spielerI.inning[this.state.inning].atBat ? (
              <td className="SpielerAktionen">
                <Button className= "button_pop_" onClick={() => this.baseOnBalls(spielerI)}>BB</Button>
                <Button className= "button_pop_" onClick={() => this.hit(spielerI)}>1B</Button>
                <Button className= "button_pop_" onClick={() => this.twoBases(spielerI)}>2B</Button>
                <Button className= "button_pop_" onClick={() => this.triple(spielerI)}>3B</Button>
                <Button className= "button_pop_" onClick={() => this.homerun(spielerI)}>HR</Button>
                <Button className= "button_pop_" onClick={() => this.hitByPitch(spielerI)}>HP</Button>
                <Button className= "button_pop_" onClick={() => this.fieldersChoice(spielerI)}>FC</Button>
                <Button className= "button_pop_" onClick={() => this.strikeout(spielerI)}>K</Button>
                <Button className= "button_pop_" onClick={() => this.strikeoutLooking(spielerI)}>K Looking</Button>
                <Button className= "button_pop_" onClick={() => this.toggleFlyoutPopup(spielerI)}>Flyout</Button>
                <Button className= "button_pop_" onClick={() => this.outDialog(spielerI)}>Out By...</Button>
              </td>
            ) : (
              <td>
              </td>
            )
          }
          {
            spielerI.inning[this.state.inning].onBase ? (
              <td className="SpielerAktionen">
                <Button className= "button_pop_" onClick={() => this.stolenBase(spielerI)}>SB</Button>
                <Button className= "button_pop_" onClick={() => this.coughtStealing(spielerI)}>CS</Button>
                <Button className= "button_pop_" onClick={() => this.runnerOneBase(spielerI)}>Runner Advanced 1B</Button>
                <Button className= "button_pop_" onClick={() => this.runnerTwoBases(spielerI)}>Runner Advanced 2B</Button>
                <Button className= "button_pop_" onClick={() => this.runnerThreeBases(spielerI)}>Runner Advanced 3B</Button>
              </td>
              ):(
              <td>
              </td>
            )
          }
          {spielerI.inning[this.state.inning].out ? (<td></td>):(<td></td>)}
          </Table.Row>
        ))
      }
    </Table.Body>
    )
  }


  {this.state.flyoutPopup ?
    <FlyoutPopup
      text='Geben Sie den Text ein'
      closePopup={this.toggleFlyoutPopup.bind(this)}
    />
    : null
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
              <label className="inning_info_label_content">{this.state.inning+1}</label>
            </td>
            <td>
              <button className="inning_Ende_Button" onClick={this.inningreset.bind(this)}>Inning beenden</button>
            </td>
            <td>
              <label className="inning_info_label_header">{this.state.gastTeam_name}: </label>
              <label className="inning_info_label_content">{this.state.punkteGastteam}</label>
            </td>
          <td>
              <label className="inning_info_label_header">{this.state.heimTeam_name}: </label>
              <label className="inning_info_label_content">{this.state.punkteHeimteam}</label>
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
