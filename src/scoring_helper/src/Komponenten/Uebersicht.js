import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import ReactModal from 'react-modal';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Table, Flag } from 'semantic-ui-react'

//Komponenten
import Tabelle            from    "./Tabelle";
import SpielerHeim        from    "./Spieler";
import SpielTabelle       from    "./SpielTabelle";
import Voreinstellungen   from    "./Voreinstellungen";
import Canvas             from    "./Canvas";
import SpielPopup         from    "./SpielPopup";

//CSS
import '../CSS/uebersicht.css';

/*
die alten Values von den Spielinfos
value={this.props.location.spielinfos.spielnummer}
value={this.props.location.spielinfos.verband_name}
value={this.props.location.spielinfos.gastTeam_name}
value={this.props.location.spielinfos.austragungsort}
value={this.props.location.spielinfos.spieldatum}
value={this.props.location.spielinfos.liga_name}
value={this.props.location.spielinfos.heimTeam_name}
value={this.props.location.spielinfos.zuschauer}
*/
class Uebersicht extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inning: 0,
      outs: 0,
      hitsGastInning: 0,
      errorsGastInning: 0,
      punkteGastInning: 0,
      hitsGastSpiel: 0,
      errorsGastSpiel: 0,
      punkteGastSpiel: 0,

      hitsHeimInning: 0,
      errorsHeimInning: 0,
      punkteHeimInning: 0,
      hitsHeimSpiel: 0,
      errorsHeimSpiel: 0,
      punkteHeimSpiel: 0,

      gastOffensive: true,
      showSpielPopup: false,

      //gast_spieler: this.props.location.spielinfos.gast_spieler,
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

      //heim_spieler: this.props.location.spielinfos.heim_spieler,
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

    this.inningChecker = this.inningChecker.bind(this);
    this.toggleSpielPopup = this.toggleSpielPopup.bind(this);
}

//Kleine checkmethode. Kann höchstwahrscheinlich gelöscht werden
inningChecker(event){
  if(this.state.inning <=10){
    console.log("Vorher: ", this.state.inning);
    this.setState({inning: this.state.inning+=1}, () => {
      console.log("Nachher: ",this.state.inning);
    })
  }else {
    console.log("Geht nicht weiter");
  }
}

toggleSpielPopup(){
  this.setState({showSpielPopup: !this.state.showSpielPopup});
}

  render() {
    const gast = this.state.gast_spieler;
    {/*Start definition Gasttabelle*/}
    let GastTableBody;
    if (gast.length > 0){
      GastTableBody=(
    <Table.Body>
      {
        gast.map(spielerI => (
        <Table.Row className="tabInhalt" key={spielerI.spielerPNummer.toString()}>
          <Table.Cell>{spielerI.spielerRNummer}</Table.Cell>
          <Table.Cell>{spielerI.spielerNName}</Table.Cell>
          <Table.Cell>{spielerI.spielerVName}</Table.Cell>
          <Table.Cell>{spielerI.spielerPosition}</Table.Cell>
          <Table.Cell>{spielerI.spielerPNummer} </Table.Cell>
          <Table.Cell>{spielerI.inning[0].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[1].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[2].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[3].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[4].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[5].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[6].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[7].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[8].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[9].ifeld} </Table.Cell>
          <Table.Cell>{spielerI.inning[10].ifeld} </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>)
  }
{/*Ende definition Gasttabelle*/}

    return (
    <div>
      <div className="wrapper_ue">
      <div className="spielInformationen_links">
        <div className="links">
          <form>
            <label>SpielNr:</label>
            <input type='number'
                   name="spielnummer"
                   value={1}
                   min={0}
                   readOnly />
                 <br/>

            <label>Verband:</label>
            <input type='text'
                   name="verband_name"
                   value={"DBV"}
                   maxLength={20}
                   readOnly />
                 <br/>

            <label>Gast:</label>
            <input type='text'
                   name="gastTeam_name"
                   maxLength={20}
                   value={"Farmers"}
                   readOnly />
                 <br/>

            <label className="in">Austragungsort:</label>
            <input className="inInput"
                   type='text'
                   name="austragungsort"
                   value={"Bünde"}
                   maxLength={20}
                   readOnly/>
                 <br/>
          </form>
        </div>

        <div className="rechts">
            <div className="gespieltAm">
              <label>Gespielt am:</label>
              <input type='Date'
                     name="spielDatum"
                     value={"2018-11-01"}
                     readOnly/>
            </div>

            <label>Liga:</label>
            <input type='text'
                   name="liga_name"
                   maxLength={20}
                   value={"1. BL"}
                   readOnly />
                 <br/>

              <label>Heim:</label>
              <input type='text'
                     name="heimTeam_name"
                     maxLength={20}
                     value={"PB U"}
                     readOnly />
                 <br/>

                 <div className="zuschauer">
                    <label>Zuschauer:</label>
                    <input className="zuschauerInput"
                           type='number'
                           name="zuschauer"
                           value={100}
                           min={0}
                           readOnly/>
                  </div>
              </div>
            </div>

      <div className="punkte_rechts">
        <Tabelle/>
      </div>
      </div>

       <div className="wrapper_ue2">
        <div className="wrapper_ue">
          <div className="spielerInformationen">
            <Table.Header className="headerUebersicht">
                    <Table.Row>
                      <Table.HeaderCell>  RueckenNr.  </Table.HeaderCell>
                      <Table.HeaderCell>  Nachname    </Table.HeaderCell>
                      <Table.HeaderCell>  Vorname     </Table.HeaderCell>
                      <Table.HeaderCell>  PosNr.      </Table.HeaderCell>
                      <Table.HeaderCell>  PassNr.     </Table.HeaderCell>
                      <Table.HeaderCell>  1           </Table.HeaderCell>
                      <Table.HeaderCell>  2           </Table.HeaderCell>
                      <Table.HeaderCell>  3           </Table.HeaderCell>
                      <Table.HeaderCell>  4           </Table.HeaderCell>
                      <Table.HeaderCell>  5           </Table.HeaderCell>
                      <Table.HeaderCell>  6           </Table.HeaderCell>
                      <Table.HeaderCell>  7           </Table.HeaderCell>
                      <Table.HeaderCell>  8           </Table.HeaderCell>
                      <Table.HeaderCell>  9           </Table.HeaderCell>
                      <Table.HeaderCell> 10           </Table.HeaderCell>
                      <Table.HeaderCell> 11           </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  {GastTableBody}
          </div>
        </div>

      <div className="button_zurueck">
          <NavLink to="/Voreinstellungen">
            <button >Abbrechen</button>
          </NavLink>
          <button
            onClick={this.toggleSpielPopup}>Start</button>
          {
            this.state.showSpielPopup ?
            <SpielPopup
              inning={this.state.inning}
              outs={this.state.outs}
              hitsGastInning={this.state.hitsGastInning}
              errorsGastInning={this.state.errorsGastInning}
              punkteGastInning={this.state.punkteGastInning}
              hitsGastSpiel={this.state.hitsGastSpiel}
              errorsGastSpiel={this.state.errorsGastSpiel}
              punkteGastSpiel={this.state.punkteGastSpiel}
              gastTeamName={this.state.gastTeamName}
              heimTeamName={this.state.heimTeamName}
              hitsHeimInning={this.state.hitsHeimInning}
              errorsHeimInning={this.state.errorsHeimInning}
              punkteHeimInning={this.state.punkteHeimInning}
              hitsHeimSpiel={this.state.hitsHeimSpiel}
              errorsHeimSpiel={this.state.errorsHeimSpiel}
              punkteHeimSpiel={this.state.punkteHeimSpiel}
              gastOffensive={this.state.gastOffensive}
              gastSpieler={this.state.gast_spieler}
              heimSpieler={this.state.heim_spieler}
          />
        :null
        }
      </div>
      </div>
    </div>
    );
  }
}
export default Uebersicht;
