
import { Button } from 'semantic-ui-react';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'



class SpielTabelle extends React.Component {


    componentDidMount() {
      this.setState({
        canvasSize: {canvasWidth: 800, canvasHeight: 600}
      })

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

    }

    componentDidMount(){
      const{canvasWidth, canvasHeight} = this.state.canvasSize;
      this.canvasHex.width = canvasWidth;
      this.canvasHex.heigh = canvasHeight;
    }

    render() {
        return (
            <div>


              <canvas ref={canvasHex => this. canvasHex }> </canvas>




            </div>
        );
    }
}



export default SpielTabelle;
