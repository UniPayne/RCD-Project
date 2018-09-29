import React, { Component } from "react";
import {Route, NavLink, HashRouter, Link} from "react-router-dom";
import Popup from "reactjs-popup";
import ReactModal from 'react-modal';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Table, Flag } from 'semantic-ui-react';



class FlyoutPopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default FlyoutPopup;
