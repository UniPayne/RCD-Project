import React, { Component } from "react";
import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import Home from "./Komponenten/Home";
import Uebersicht from "./Komponenten/Uebersicht";
import Voreinstellungen from "./Komponenten/Voreinstellungen";






class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Scoring Helper</h1>
            <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Uebersicht" component={Uebersicht}/>
            <Route path="/Voreinstellungen" component={Voreinstellungen}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
