import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';



class Canvas extends React.Component {
  componentDidMount() {
  const canvas = this.refs.canvas
  const ctx = canvas.getContext("2d")
  ctx.beginPath();
  ctx.moveTo(40,16);    //Startpunkt oben in der Mitte
  ctx.lineTo(16,40);    //Mitte links
  ctx.lineTo(40,64);    //Unten Mitte
  ctx.lineTo(64,40);    //Mitte Rechts
  ctx.lineTo(40,16);    //Zurück nach Oben
  ctx.strokeStyle = "gray"; //macht die Linie grau
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
}

homeZuEinsVoll(){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.moveTo(40,64);
  ctx.lineTo(64,40);
  ctx.stroke();
  ctx.closePath();
}

einsZuZweiHalb(){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.moveTo(64,40);
  ctx.lineTo(52,28);
  ctx.stroke();
  ctx.closePath();
}

einsZuZweiVoll(){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.moveTo(64,40);
  ctx.lineTo(40,16);
  ctx.stroke();
  ctx.closePath();
}

zweiZuDreiHalb(){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.moveTo(40,16);
  ctx.lineTo(28,28);
  ctx.stroke();
  ctx.closePath();
}

zweiZuDreiVoll(){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.moveTo(40,16);
  ctx.lineTo(16,40);
  ctx.stroke();
  ctx.closePath();
}

dreiZuHomeHalb(){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.moveTo(16,40);
  ctx.lineTo(28,52);
  ctx.stroke();
  ctx.closePath();
}

dreiZuHomeVoll(){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.moveTo(16,40);
  ctx.lineTo(40,64);
  ctx.stroke();
  ctx.closePath();
}

schriftUntenRechts(schrift){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.font = "12px Courier";
  ctx.fillText(schrift,60,60);
}

schriftObenRechts(schrift){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.font = "12px Courier";
  ctx.fillText(schrift,55,25);
}

schriftObenLinks(schrift){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.font = "12px Courier";
  ctx.fillText(schrift,10,25);
}

schriftUntenLinks(schrift){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.font = "12px Courier";
  ctx.fillText(schrift,20,60);
}

schriftMitte(schrift){
  const canvas = this.refs.canvas;
  const ctx = canvas.getContext("2d");
  ctx.font = "12px Courier";
  ctx.fillText(schrift,32,42);
}



bb(){
 this.homeZuEinsVoll();
 this.schriftUntenRechts("BB");
}

hit(){
  this.homeZuEinsVoll();
  this.schriftUntenRechts("1B");
}

zweiBases(){
  this.homeZuEinsVoll();
  this.einsZuZweiVoll();
  this.schriftObenRechts("2B");
}

triple(){
  this.homeZuEinsVoll();
  this.einsZuZweiVoll();
  this.zweiZuDreiVoll();
  this.schriftObenLinks("3B");
}

homerun(){
  this.homeZuEinsVoll();
  this.einsZuZweiVoll();
  this.zweiZuDreiVoll();
  this.dreiZuHomeVoll();
  this.schriftMitte("HR");
}

strikeoutEins(){
  this.schriftMitte("I");
  this.schriftUntenRechts("K")
}

strikeoutZwei(){
  this.schriftMitte("II");
  this.schriftUntenRechts("K")
}

strikeoutDrei(){
  this.schriftMitte("III");
  this.schriftUntenRechts("K")
}

flyoutEins(){
  this.schriftMitte("I");
  this.schriftUntenRechts("F")
}

flyoutZwei(){
  this.schriftMitte("II");
  this.schriftUntenRechts("F")
}

flyoutDrei(){
  this.schriftMitte("III");
  this.schriftUntenRechts("F")
}

runnerMoved1_2(){
  this.einsZuZweiVoll();
  this.schriftObenRechts("X");
}

runnerMoved1_3(){
  this.einsZuZweiVoll();
  this.zweiZuDreiVoll();
  this.schriftObenLinks("X");
}

runnerMoved1_4(){
  this.einsZuZweiVoll();
  this.zweiZuDreiVoll();
  this.dreiZuHomeVoll();
  this.schriftUntenLinks("X");
}

runnerMoved2_3(){
  this.zweiZuDreiVoll();
  this.schriftObenLinks("X");
}

runnerMoved2_4(){
  this.zweiZuDreiVoll();
  this.dreiZuHomeVoll();
  this.schriftUntenLinks("X");
}

runnerMoved3_4(){
  this.dreiZuHomeVoll();
  this.schriftUntenLinks("X");
}

cs1_2_1(){
  this.einsZuZweiHalb();
  this.schriftObenRechts("CS");
  this.schriftMitte("I");
}


cs1_2_2(){
  this.einsZuZweiHalb();
  this.schriftObenRechts("CS");
  this.schriftMitte("II");
}

cs1_2_3(){
  this.einsZuZweiHalb();
  this.schriftObenRechts("CS");
  this.schriftMitte("III");
}

cs2_3_1(){
  this.zweiZuDreiHalb();
  this.schriftObenLinks("CS");
  this.schriftMitte("I");
}

cs2_3_2(){
  this.zweiZuDreiHalb();
  this.schriftObenLinks("CS");
  this.schriftMitte("II");
}

cs2_3_3(){
  this.zweiZuDreiHalb();
  this.schriftObenLinks("CS");
  this.schriftMitte("III");
}


    render() {
        return (
          <div>
              <canvas ref="canvas" className="spielfeld" height="80px" width="80px"></canvas>
              <button onClick={this.bb.bind(this)}>BB</button>
              <button onClick={this.hit.bind(this)}>1B</button>
              <button onClick={this.zweiBases.bind(this)}>2B</button>
              <button onClick={this.triple.bind(this)}>3B</button>
              <button onClick={this.homerun.bind(this)}>HR</button>
              <button onClick={this.strikeoutEins.bind(this)}>K1</button>
              <button onClick={this.strikeoutZwei.bind(this)}>K2</button>
              <button onClick={this.strikeoutDrei.bind(this)}>K3</button>
              <button onClick={this.strikeoutEins.bind(this)}>F1</button>
              <button onClick={this.strikeoutZwei.bind(this)}>F2</button>
              <button onClick={this.strikeoutDrei.bind(this)}>F3</button>
              <button onClick={this.runnerMoved1_2.bind(this)}>X1-2</button>
              <button onClick={this.runnerMoved1_3.bind(this)}>X1-3</button>
              <button onClick={this.runnerMoved1_4.bind(this)}>X1-4</button>
              <button onClick={this.runnerMoved2_3.bind(this)}>X2-3</button>
              <button onClick={this.runnerMoved2_4.bind(this)}>X2-4</button>
              <button onClick={this.runnerMoved3_4.bind(this)}>X3-4</button>
              <button onClick={this.cs1_2_1.bind(this)}>CS1-2I</button>
              <button onClick={this.cs1_2_2.bind(this)}>CS1-2II</button>
              <button onClick={this.cs1_2_3.bind(this)}>CS1-2III</button>
              <button onClick={this.cs2_3_1.bind(this)}>CS2-3I</button>
              <button onClick={this.cs2_3_2.bind(this)}>CS2-3II</button>
              <button onClick={this.cs2_3_3.bind(this)}>CS2-3III</button>


              {/*
              <button onClick={this..bind(this)}></button>
              <button onClick={this..bind(this)}></button>
              <button onClick={this..bind(this)}></button>
              <button onClick={this..bind(this)}></button>
              <button onClick={this..bind(this)}></button>
              <button onClick={this..bind(this)}></button>
              <button onClick={this..bind(this)}></button>
              */}

          </div>

        );
    }
}
export default Canvas;
