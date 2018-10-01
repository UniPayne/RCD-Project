import React, { Component } from "react";
import {Route, NavLink, HashRouter, Link} from "react-router-dom";
import Popup from "reactjs-popup";
import ReactModal from 'react-modal';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Table, Flag } from 'semantic-ui-react';

import '../CSS/Flyoutpopup.css';


class SpielEnde extends React.Component {
  render() {
    return (
      <div className='popup'>
      <h1>Spiel wurde erfolgreich beendet</h1>
        <div>
          <Link to={{
            pathname: '/Home'
          }}>
          <button>Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SpielEnde;
