import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';



class Canvas extends React.Component {
  componentDidMount() {
  const canvas = this.refs.canvas
  const ctx = canvas.getContext("2d")
  const img = this.refs.image
  ctx.beginPath();
  ctx.moveTo(40,16);    //Startpunkt oben in der Mitte
  ctx.lineTo(16,40);    //Mitte links
  ctx.lineTo(40,64);    //Unten Mitte
  ctx.lineTo(64,40);    //Mitte Rechts
  ctx.lineTo(40,16);    //Zurück nach Oben
  ctx.strokeStyle = "gray"; //mach die Linie grau
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
}
    render() {
        return (
          <canvas ref="canvas" className="spielfeld" height="80px" width="80px"></canvas>
            />
        );
    }
}
export default Canvas;
