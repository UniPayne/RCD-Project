
import { Button } from 'semantic-ui-react';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

//CSS
import "../CSS/spielTabelle.css";

class SpielTabelle extends React.Component {
  componentWillMount() {
    this.setState({
      canvasSize: {canvasWidth: 100, canvasHeight: 50}
    })
  }

//  constructor(props){
  //  super(props);
    //this.state={
//      hexsize: 20
  //  }





      /*
        let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
        let malen = canvas.getContext('2d');
        {

  perfekte raute. wird nur nich angezeigt. warum? keiine ahnung
        var angle = 0;
        var deltaAngle = 2 * Math.PI / n;
        malen.moveTo(x0, y0 - radius);
        for (var i=1; i<n; i++) {
        angle += deltaAngle;
        malen.lineTo(x0 + radius*Math.sin(angle), y0 - radius*Math.cos(angle));}
        malen.closePath();
        malen.lineWidth = 4;
        malen.strokeStyle='red';
        malen.stroke();

        malen.translate(canvas.width / 2, canvas.height / 2);
        malen.scale(1, 2);
        malen.rotate(45 * Math.PI / 180);
        malen.strokeRect(-50, -50, 100, 100);

        malen.beginPath();
        malen.moveTo(10,20);
        malen.lineTo(19,11);
        malen.lineTo(10,2);
        malen.lineTo(1,11);
        malen.closePath();
        malen.lineWidth = 2;
        //malen.strokeStyle = 'red';
        malen.stroke();
        }

        malen.beginPath();
        malen.moveTo(10,19);
        malen.lineTo(18,11);
        malen.lineTo(10,3);
        malen.lineTo(2,11);
        malen.closePath();
        malen.lineWidth = 2;
        //malen.strokeStyle = 'red';
        malen.stroke();

zum ausführen
        <canvas canvas ref="myCanvas" width={20} height={20} />

*/



    componentDidMount(){
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      this.canvasHex.width = canvasWidth;
      this.canvasHex.height = canvasHeight;
      //this.drawRaute(this.canvasHex, {x: 50, y: 50})
    }
    /*

    drawRaute(canvasID, center){
      for (let i = 0; i<=5; i++){
        let start = this.getHexCornerCoord(center, i);
        let end = this.getHexCornerCoord(center, i + 1);
        this.drawLine(canvasID,{x: start.x, y: start.y}, {x: end.x, y: end.y})
      }
    }

    getHexCornerCoord(center, i){
      let angle_deg = 60 * i + 30;
      let angle_rad = Math.PI / 180 * angle_deg;
      let x = center.x + this.state.hexSize * Math.cos(angle_rad);
      let y = center.y + this.state.hexSize * Math.sin(angle_rad);
      return this.Point(x, y);
    }

    Point(x, y){
      return {x: x, y: y};
    }

    drawLine(canvasID, start, end){
        const ctx = canvasID.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.storke();
        ctx.closePath();
    }
*/



    render() {
        return (
            <div>
              <canvas ref={canvasHex => this.canvasHex = canvasHex}> </canvas>
            </div>
        );
    }
}



export default SpielTabelle;
