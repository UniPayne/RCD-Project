import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

//.css
import "../CSS/canvas.css"


class Canvas extends React.Component {
    render() {
        return (
          <div className="canvas">
            <canvas className="spielfeld"></canvas>
          </div>

        );
    }
}
export default Canvas;
