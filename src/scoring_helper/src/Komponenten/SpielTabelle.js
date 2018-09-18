
import { Button } from 'semantic-ui-react';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'



class SpielTabelle extends React.Component {


    componentDidMount() {

        let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
        let malen = canvas.getContext('2d');
        {/*

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
        */}

        malen.beginPath();
        malen.moveTo(10,19);
        malen.lineTo(18,11);
        malen.lineTo(10,3);
        malen.lineTo(2,11);
        malen.closePath();
        malen.lineWidth = 2;
        //malen.strokeStyle = 'red';
        malen.stroke();



    }

    componentDidMount2() {

        let canvas = ReactDOM.findDOMNode(this.refs.myCanvas2);
        let malen = canvas.getContext('2d');

        malen.beginPath();
        malen.moveTo(20,29);
        malen.lineTo(28,21);
        malen.lineTo(20,13);
        malen.lineTo(12,21);
        malen.closePath();
        malen.lineWidth = 2;
        //malen.strokeStyle = 'red';
        malen.stroke();


      }


    render() {
        return (
            <div>

                <div>
                  <Table singleLine className="inf">
                    <Table.Header className="headerT">
                      <Table.Row>
                        <Table.HeaderCell>1</Table.HeaderCell>
                        <Table.HeaderCell>2</Table.HeaderCell>
                        <Table.HeaderCell>3</Table.HeaderCell>
                        <Table.HeaderCell>4</Table.HeaderCell>
                        <Table.HeaderCell>5</Table.HeaderCell>
                        <Table.HeaderCell>6</Table.HeaderCell>
                        <Table.HeaderCell>7</Table.HeaderCell>
                        <Table.HeaderCell>8</Table.HeaderCell>
                        <Table.HeaderCell>9</Table.HeaderCell>
                        <Table.HeaderCell>10</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body >
                      <Table.Row className="inhaltT">
                        <Table.Cell>&#9826;</Table.Cell>
                        <Table.Cell><canvas canvas ref="myCanvas" width={20} height={20} /></Table.Cell>
                        <Table.Cell><canvas  canvas ref="myCanvas2" width={20} height={20} /></Table.Cell>

                        </Table.Row>
                      </Table.Body>
                      <Table.Body >
                        <Table.Row className="inhaltT">

                          </Table.Row>
                          <Table.Row className="inhaltT">
                            <Table.Cell>&#9826;</Table.Cell>

                            </Table.Row>
                            <Table.Row className="inhaltT">
                              <Table.Cell>&#9826;</Table.Cell>

                              </Table.Row>
                              <Table.Row className="inhaltT">
                                <Table.Cell>&#9826;</Table.Cell>

                                </Table.Row>
                                <Table.Row className="inhaltT">
                                  <Table.Cell>&#9826;</Table.Cell>

                                  </Table.Row>
                                  <Table.Row className="inhaltT">
                                    <Table.Cell>&#9826;</Table.Cell>

                                    </Table.Row>
                                    <Table.Row className="inhaltT">
                                      <Table.Cell>&#9826;</Table.Cell>

                                      </Table.Row>
                                      <Table.Row className="inhaltT">
                                        <Table.Cell>&#9826;</Table.Cell>

                                        </Table.Row>
                        </Table.Body>
                  </Table>

                </div>
            </div>
        );
    }
}



export default SpielTabelle;
