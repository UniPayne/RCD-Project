import React, { Component } from "react";
import {Route, Link, HashRouter} from "react-router-dom";
import logo from '../logo.png';
import { Table, Flag } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group, Shape} from "react-konva";

//Komponenten
import Uebersicht from "./Uebersicht";
import Spielinfos from "./Spielinfos";
import GastTeam_Form from "./GastTeam_Form";
import Canvas from "./Canvas";


//CSS
import "../CSS/home.css";
import "../CSS/voreinstellungen.css";
import '../CSS/spielInfo_Popup.css';
import '../CSS/spieler.css';
import '../CSS/canvas.css';

class Voreinstellungen extends Component {
/*
Das ist der Standard Konstruktor. Für Testzwecke wurde der darunter angelegt.
Am Ende einfach den unteren wieder löschen.

constructor(props){
    super(props);
    this.state = {
      spielnummer:            '',
      spieldatum:             '',
      liga_name:              '',
      verband_name:           '',
      gastTeam_name:          '',
      heimTeam_name:          '',
      austragungsort:         '',
      zuschauer:              '',

      showInfoPopup:          false,
      info_ok:                false,

      showGastPopup:          false,
      gast_spieler:              [],
      gast_ok:                false,

      showHeimPopup:          false,
      heim_spieler:              [],
      heim_ok:                false,
    }
}

Lösche von Hier -->*/
constructor(props){
  super(props);
  this.state = {
    spielnummer:            '',
    spieldatum:             '',
    liga_name:              '',
    verband_name:           '',
    gastTeam_name:          '',
    heimTeam_name:          '',
    austragungsort:         '',
    zuschauer:              '',

    showInfoPopup:          false,
    info_ok:                false,

    showGastPopup:          false,
    gast_ok:                false,

    showHeimPopup:          false,
    gast_spieler:
    [
    {spielerRNummer: "11", spielerNName: "Hansson", spielerVName: "Hans", spielerPosition: "11", schlagPosition: 0, spielerPNummer: "11",
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
    {spielerRNummer: "12", spielerNName: "Peterson", spielerVName: "Peter", spielerPosition: "12", schlagPosition: 1, spielerPNummer: "12",
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
    {spielerRNummer: "13", spielerNName: "Gustavson", spielerVName: "Gustav", spielerPosition: "13", schlagPosition: 2, spielerPNummer: "13",
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
    {spielerRNummer: "14", spielerNName: "Olafson", spielerVName: "Olaf", spielerPosition: "14", schlagPosition: 3, spielerPNummer: "14",
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
    {spielerRNummer: "15", spielerNName: "Hendrikson", spielerVName: "Hendrik", spielerPosition: "15", schlagPosition: 4, spielerPNummer: "15",
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
    {spielerRNummer: "16", spielerNName: "Gretedottir", spielerVName: "Grete", spielerPosition: "16", schlagPosition: 5, spielerPNummer: "16",
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
    {spielerRNummer: "17", spielerNName: "Tomson", spielerVName: "Tom", spielerPosition: "17", schlagPosition: 6, spielerPNummer: "17",
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
    {spielerRNummer: "18", spielerNName: "Timson", spielerVName: "Tim", spielerPosition: "18", schlagPosition: 7, spielerPNummer: "18",
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

    ],

    //heim_spieler: this.props.location.spielinfos.heim_spieler,
    heim_spieler:
    [
    {spielerRNummer: "21", spielerNName: "Timoson", spielerVName: "Timo", spielerPosition: "21", schlagPosition: 0, spielerPNummer: "21",
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
    {spielerRNummer: "22", spielerNName: "Antonson", spielerVName: "Anton", spielerPosition: "22", schlagPosition: 1, spielerPNummer: "22",
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
    {spielerRNummer: "23", spielerNName: "Gabrielson", spielerVName: "Gabriel", spielerPosition: "23", schlagPosition: 2, spielerPNummer: "23",
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
    {spielerRNummer: "24", spielerNName: "Johannesos", spielerVName: "Johannes", spielerPosition: "24", schlagPosition: 3, spielerPNummer: "24",
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
    {spielerRNummer: "25", spielerNName: "Danielson", spielerVName: "Daniel", spielerPosition: "25", schlagPosition: 4, spielerPNummer: "25",
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
    {spielerRNummer: "26", spielerNName: "Theoson", spielerVName: "Theo", spielerPosition: "26", schlagPosition: 5, spielerPNummer: "26",
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
    {spielerRNummer: "27", spielerNName: "Martinson", spielerVName: "Martin", spielerPosition: "27", schlagPosition: 6, spielerPNummer: "27",
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
    {spielerRNummer: "28", spielerNName: "Michaelson", spielerVName: "Michael", spielerPosition: "28", schlagPosition: 7, spielerPNummer: "28",
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

    ],
    heim_ok:                false,
  };
}
// <-- bis hier!



toggleInfoPopup() {
  this.setState({showInfoPopup: !this.state.showInfoPopup});
}

toggleGastPopup(){
  this.setState({showGastPopup: !this.state.showGastPopup});
}

toggleHeimPopup(){
  this.setState({showHeimPopup: !this.state.showHeimPopup});
}


submitSpielinfosMain(stati){
  this.setState({spielnummer:     stati.form_spielnummer});
  this.setState({spieldatum:      stati.form_spieldatum});
  this.setState({liga_name:       stati.form_liga_name});
  this.setState({verband_name:    stati.form_verband_name});
  this.setState({gastTeam_name:   stati.form_gastTeam_name});
  this.setState({heimTeam_name:   stati.form_heimTeam_name});
  this.setState({austragungsort:  stati.form_austragungsort});
  this.setState({zuschauer:       stati.form_zuschauer});
  this.setState({info_ok:         stati.form_info},() => {
  console.log("Voreinstellungen Info_ok: ",this.state.info_ok);
  } );
}


submitGastMain(stati){
  this.setState({gast_ok: stati.form_gast_ok}, () => {
     console.log("Voreinstellungen GastOk: ", this.state.gast_ok);
   });
  this.setState({gast_spieler: stati.spielerArray}, () => {
     console.log(this.state.gast_spieler);
   });
}


submitHeimMain(stati){
  this.setState({heim_ok: stati.form_heim_ok}, () => {
     console.log("Voreinstellungen HeimOk: ", this.state.heim_ok);
   });
  this.setState({heim_spieler: stati.spielerArray}, () => {
     console.log(this.state.heim_spieler);
   });
}


  render() {
    const gast = this.state.gast_spieler || [];
    const heim = this.state.heim_spieler || [];


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
          <Table.Cell>{spielerI.spielerPNummer}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>)
  }
{/*Ende definition Gasttabelle*/}



{/*Start definition Heimtabelle*/}
  let HeimTableBody;
  if (heim.length > 0){
    HeimTableBody=(
  <Table.Body>
    {
      heim.map(spielerI => (
      <Table.Row className="tabInhalt"key={spielerI.spielerPNummer.toString()}>
        <Table.Cell>{spielerI.spielerRNummer}</Table.Cell>
        <Table.Cell>{spielerI.spielerNName}</Table.Cell>
        <Table.Cell>{spielerI.spielerVName}</Table.Cell>
        <Table.Cell>{spielerI.spielerPosition}</Table.Cell>
        <Table.Cell>{spielerI.spielerPNummer}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>)
}
{/*Ende Definition Heimtabelle*/}


    return (
          <div>
<h1>Scoring Helper</h1>
{/*Start Spielinformationen*/}
            <div className="vor_oben">
              <div>
                <div className="spielInformationen_links">
                  <div className="headerInformationen">Informationen</div>
                  <div className="links">
                    <form>
                      <label>SpielNr:</label>
                      <input type='number' name="spielnummer" value={this.state.spielnummer} min={0} readOnly /><br/>
                      <label>Verband:</label>
                      <input type='text' name="verband_name" value={this.state.verband_name} maxLength={20} readOnly /><br/>
                      <label>Gast:</label>
                      <input type='text' name="gastTeam_name" maxLength={20} value={this.state.gastTeam_name} readOnly /><br/>

                      <label className="in">Austragungsort:</label>
                      <input className="inInput" type='text' name="austragungsort" value={this.state.austragungsort} maxLength={20} readOnly/><br/>
                    </form>
                  </div>

                  <div className="rechts">
                    <div className="gespieltAm">
                      <label>Gespielt am:</label>
                      <input type='Date' name="spielDatum" value={this.state.spieldatum} readOnly/>
                    </div>
                    <label>Liga:</label>
                    <input type='text' name="liga_name" maxLength={20} value={this.state.liga_name} readOnly /><br/>
                    <label>Heim:</label>
                    <input type='text' name="heimTeam_name" maxLength={20} value={this.state.heimTeam_name} readOnly /><br/>
                    <div className="zuschauer">
                      <label>Zuschauer:</label>
                      <input className="zuschauerInput" name="zuschauer" type='number'value={this.state.zuschauer} min={0} readOnly/>
                      <div className="sInfo">
                          <button className="button_inf_eintragen" onClick={this.toggleInfoPopup.bind(this)}>Informationen eintragen</button>
                          {
                            this.state.showInfoPopup ?
                            <Spielinfos
                              submitSpielinfosPopUp={this.submitSpielinfosMain.bind(this)}
                              closePopup={this.toggleInfoPopup.bind(this)}

                              currentSpielNr={this.state.spielnummer}
                              currSpielDatum={this.state.spieldatum}
                              currLigaName={this.state.liga_name}
                              currVerbandName={this.state.verband_name}
                              currGastTeamName={this.state.gastTeam_name}
                              currHeimTeamName={this.state.heimTeam_name}
                              currAustragungsOrt={this.state.austragungsort}
                              currZuschauer={this.state.zuschauer}
                              currInfo={this.state.info_ok}
                            />
                            :null
                          }
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="spielStartenbox">
                    <div>
                        <Link to={{
          				  pathname: '/SpielPopup',
          				  spielinfos: this.state
          			  }}>
                {/*   <button disabled={!(this.state.info_ok && this.state.gast_ok && this.state.heim_ok) }className="vor_button_weiter">Spiel Starten</button>
*/}
                         <button className="vor_button_weiter">Spiel Starten</button>

                        </Link>
                      </div>
                  </div>
              <img src={logo} className="logo" alt="logo" />
            </div>
          </div>
{/*Ende Spielinfos*/}



          <div className="vor_heim_gast_border">

{/*Start Gastteam*/}
            <div className="vor_gast">
              <label>Gast</label>
                <Table className="spie">
                  <Table.Header className="header">
                    <Table.Row >
                      <Table.HeaderCell>  RueckenNr.  </Table.HeaderCell>
                      <Table.HeaderCell>  Nachname    </Table.HeaderCell>
                      <Table.HeaderCell>  Vorname     </Table.HeaderCell>
                      <Table.HeaderCell>  PosNr.      </Table.HeaderCell>
                      <Table.HeaderCell>  PassNr.     </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                {GastTableBody}
                </Table>

                </div>

{/*Ende Gastteam*/}


{/*Start Heimteam*/}
            <div className="vor_heim">
                <label>Heim</label>
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
                  {HeimTableBody}
                  </Table>
          </div>
{/*Ende Heimteam*/}


{/*Start Button zum hinzufügen der Spieler*/}
<div>
<button
    className="vor_button_gast"
    onClick={this.toggleGastPopup.bind(this)}>Gastteam bearbeiten</button>
    {this.state.showGastPopup ?
      <GastTeam_Form
        submitGastPopUp={this.submitGastMain.bind(this)}
        title="Gast"
        currentArray = {this.state.gast_spieler}
        gastOk = {this.state.gast_ok}
        closePopup={this.toggleGastPopup.bind(this)}/>
      :null
    }

  <button className="vor_button_heim"
    onClick={this.toggleHeimPopup.bind(this)}>Heimteam bearbeiten</button>
      {this.state.showHeimPopup ?
        <GastTeam_Form
          submitGastPopUp={this.submitHeimMain.bind(this)}
          title="Heim"
          currentArray = {this.state.heim_spieler}
          heimOk = {this.state.heim_ok}
          closePopup={this.toggleHeimPopup.bind(this)}/>
        :null
      }
  </div>
{/*Ende Button zum hinzufügen der Spieler*/}

{/*
          hier war der Spiel Starteb Button vorher
*/}

          </div>
        </div>
    );
  }
}

export default Voreinstellungen;
