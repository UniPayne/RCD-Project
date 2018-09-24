import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';



class Canvas extends React.Component {
    constructor() {
        super();
        this.state = { isMouseInside: false};
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({ isMouseInside: true});
    }

    handleMouseLeave() {
        this.setState({ isMouseInside: false});
    }

    render() {
        return (

          <div>
            <canvas ref={canvasHex => this.canvasHex =canvasHex}></canvas>
            </div>
        );
    }
}
export default Canvas;
